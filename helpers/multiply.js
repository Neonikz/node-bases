const fs = require('fs');
const colors = require('colors');

const createFile = async(base = 5,listar = false,untill = 10) => {
    try {
        
        let valueToReturn = "";
        let impression = "";
    
        for (let i = 1; i <= untill; i++) {
            valueToReturn += `${base} x ${i} = ${base * i}\n`;
            impression += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar){
            console.log("================================".green)
            console.log('         Tabla del:'.green,colors.bgBlue(base));
            console.log("================================".green)
            console.log(impression);
        }
    
        fs.writeFileSync(`./output/table-${base}.txt`, valueToReturn);
        return `table-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createFile,
};
