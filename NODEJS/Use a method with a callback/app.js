const fs = require('fs');

const content = 'This is the content that will be written to the file.';

fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File written successfully!');
    }
});
