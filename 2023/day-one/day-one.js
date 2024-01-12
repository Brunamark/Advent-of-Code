const fs = require('fs');
const filePath = 'C:/Users/bruni/Downloads/input1.txt';
let sum = 0;

function processFileContents(data) {
    const line = data.split('\n');
    const numbersLine = line.map(line => {
        let num = line.toString().match(/\d+/g);
        if (num) {
            return num.join('');
        }
    });

    for (let index = 0; index < numbersLine.length; index++) {
        let numInt = parseFloat(numbersLine[index]);
        let numStr = numbersLine[index];

        if ((numInt / 10) < 1) {
            numStr = numStr.toString().concat(numbersLine[index]);
        }
        
        if ((numInt / 10) > 10) {
            const tam = numStr.length;
            let num0 = numStr[0];
            numStr = num0 + numStr[tam - 1];
            //console.log(numStr);
        }
       sum += parseFloat(numStr);
    }
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Erro ao ler o arquivo: ${err}`);
        return;
    }
    processFileContents(data);
    console.log(sum);
});