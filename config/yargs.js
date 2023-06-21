const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe:'Its the base of the multiplication table',
                })
                .option('l',{
                    alias:'list',
                    type:'boolean',
                    default:false,
                    describe:'It able you to show the list of multiplication',
                })
                .option('u',{
                    alias:'untill',
                    type:'number',
                    default:10,
                    describe:'Indicates the number of multiplications',
                })
                .check((argv) => {
                    if(isNaN(argv.base) || isNaN(argv.untill)){
                        throw 'Must be a number'
                    }
                    return true;
                })
                .argv;
module.exports = argv;