const fs = require('fs/promises');

async function main(){
    const buffer = await fs.readFile('./input3.txt','utf-8');
    const file = buffer.split('\n');
    let headqueartes = [];
    let num = [];
    file.forEach(e=>{
        const line = [];
        e.split('').forEach(char =>{
            line.push(char);
        });
        headqueartes.push(line);
    });
    num = analyseHeadquartes(headqueartes);
    let sum = num.reduce((a,b)=>parseFloat(a)+parseFloat(b),0);
    console.log('A soma eh: ', sum);
}
main();
function getNumber(line, row){
    while(isNumber(line[row])){
        row--;
    }
    row++;
    let str = ''; 
    while(isNumber(line[row])){
        str = str.concat(line[row]);
        line[row] = '.';
        row++
        }
           

    console.log('aqui o: ',str );
    return str;
}

function isNumber(str){
    const num = Number(str);
    return !Number.isNaN(num);
}
function analyseHeadquartes(headqueartes){
    let rows = headqueartes.length;
    let arrayNum = [];
    for(let i = 0; i<rows; i++){
        let lines = headqueartes[i].length;
        for(let j = 0; j<lines ; j++){
            if(!isNumber(headqueartes[i][j]) && headqueartes[i][j]!='.' & !/^[a-zA-Z]+$/.test(headqueartes[i][j])){
                if(i-1>=0){
                    if(headqueartes[i-1][j-1] !== null && headqueartes[i-1][j-1] !== '.'){
                        arrayNum.push(getNumber(headqueartes[i-1],j-1));
                    }
                    if(headqueartes[i-1][j] !== null && headqueartes[i-1][j] !== '.'){
                        arrayNum.push(getNumber(headqueartes[i-1],j));
                    }
                    if(headqueartes[i-1][j+1] !== null && headqueartes[i-1][j+1] !== '.'){  
                        arrayNum.push(getNumber(headqueartes[i-1],j+1));
                    }
             }
            if(headqueartes[i][j+1] !== null && headqueartes[i][j+1] !== '.' ){
                arrayNum.push(getNumber(headqueartes[i],j+1));
            }
            if(i+1 < headqueartes.length){
                if( headqueartes[i+1][j+1] !== null && headqueartes[i+1][j+1] !== '.'){
                    arrayNum.push(getNumber(headqueartes[i+1],j+1));
                }
                if(headqueartes[i+1][j] !== null  && headqueartes[i+1][j] !== '.' ){
                    arrayNum.push(getNumber(headqueartes[i+1],j));
                }
                if(headqueartes[i+1][j-1] !== null && headqueartes[i+1][j-1] !== '.'){
                    arrayNum.push(getNumber(headqueartes[i+1],j-1));
                }
            }          
        }
     }

    }
    console.log('ArrayNum', arrayNum);
    return arrayNum;
}