
const fs = require('fs');
const filePath = 'C:/Users/bruni/Downloads/input1.txt';

let caloriesElves = [];
let elves = [];
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erro ao ler o arquivo: ${err}`);
      return;
    }   
    elves = data.split('\n');
    console.log(elves);
    let acumulador = 0;
    elves.map((value,index,array) => {        
        if(value != ''){
            acumulador += parseInt(value);    
        }
       else {
        caloriesElves.push(acumulador);
        acumulador = 0;
        return true;
       }      
    });
    caloriesElves.sort((a,b) => a-b);
    console.log(caloriesElves)
    console.log(caloriesElves[(caloriesElves.length)-1])

});


