
function authorize(req, res, next) {
    passport.authenticate('jwt', {session: false}, (err, user) => {
        if (user) {
            req.user = user;
        }
        next();
    })(req, res);
}

module.exports = authorize;
