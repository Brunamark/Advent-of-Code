const fs = require('fs/promises');

async function main(){
    const buffer = await fs.readFile('./input1.txt', 'utf-8');
    const file = buffer.split('\n');
    let finalString = '';
    let numString ='';
    const list = [];
   
    

    const output = list.map((e)=> e.charAt(0) + e.charAt((e.length)- 1));//.reduce((a,b)=> parseFloat(a)+ parseFloat(b),0);
    console.log(output);
    let sum = 0;
    for(let index =0; index<output.length; index++){
        sum += parseFloat(output[index]);

    }
    console.log(sum);
}

function contains(str) {
    if(str.includes('one')) return '1';
    if(str.includes('two')) return '2';
    if(str.includes('three')) return '3';
    if(str.includes('four')) return '4';
    if(str.includes('five')) return '5';
    if(str.includes('six')) return '6';
    if(str.includes('seven')) return '7';
    if(str.includes('eight')) return '8';
    if(str.includes('nine')) return '9';

    return '';

}
 main();
