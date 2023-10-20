const figlet = require('figlet');

const text = 'Hello, Figlet!';

figlet(text, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
