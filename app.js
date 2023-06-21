const {createFile} = require('./helpers/multiply');
const argv = require('./config/yargs');
require('colors');

console.clear();

//Without yargs
// const [,,arg3 = "base=5"] = process.argv;
// const [,base = 5] = arg3.split('=');
// const base = 15;

createFile(argv.base,argv.list,argv.untill)
    .then(fileName => console.log(fileName.rainbow,'created'))
    .catch(error => console.error(error,'Error creating file'));
