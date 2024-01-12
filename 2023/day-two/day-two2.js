const fs = require('fs/promises');

async function main(){
    const buffer = await fs.readFile('./day-2/input2.txt', 'utf-8');
    const file = buffer.split('\n');
    //console.log(file);
    let valuePerGame = [];
    let valRed;
    let valBlue;
    let valGreen;
    let valMult ;
    for(let index = 0; index<file.length; index++){
        valRed = countBox(colorBox(file[index].toString(), 'red'));
        valBlue = countBox(colorBox(file[index].toString(), 'blue'));
        valGreen = countBox(colorBox(file[index].toString(), 'green'));
        valMult = valRed*valBlue*valGreen;
        valuePerGame.push(valMult);
    }
    console.log('A soma eh: ',valuePerGame.reduce((a,b)=> parseFloat(a)+ parseFloat(b),0));  
   
}
function colorBox(str, color){
    const regex = new RegExp('(\\d+)\\s+' + color, 'g');
    let match;
    let boxes = [];
    let higherValue;
// Loop para encontrar todas as correspondências
    while ((match = regex.exec(str)) !== null) {
  // match[1] contém o valor antes da string "color"
        const value = match[1];
        
        if(value){
            boxes.push(value);
           // console.log('Valor antes de ' +color+' :', value);
        }   
    }
    console.log('boxes color ' +color+ ' : ',boxes);
    return boxes;          
}
function countBox(array){
    let higherValue = 0 ;
    let value;
    for(let index = 0; index<array.length; index++){
        value = parseFloat(array[index]);

        if(value> higherValue){
            higherValue = value;
        }
    }
    console.log('Higher value is: ', higherValue);
    return higherValue;
}

main();