app.post('/planets/:id/image', upload.single('image'), (req, res) => {
    const id = req.params.id;
    const imagePath = req.file.path;

    db.oneOrNone('SELECT * FROM planets WHERE id = $1', id)
        .then((planet) => {
            if (!planet) {
                return res.status(404).json({error: 'Planet not found'});
            }

            db.none('UPDATE planets SET image = $1 WHERE id = $2', [imagePath, id])
                .then(() => {
                    res.json({msg: 'Image uploaded and linked to the planet.'});
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).json({
                        error: 'An error occurred while updating the image path.',
                    });
                });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: 'An error occurred while checking the planet.'});
        });
});
