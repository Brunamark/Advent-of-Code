const fs = require('fs/promises');

async function main(){
    const buffer = await fs.readFile('./day-four/input4.txt','utf-8');
    const file = buffer.split('\n');
    let numGame = [];
    let numPlayer = [];
    numGame = getNumbersGame(file);
    numPlayer = getNumbersPlayer(file);
    let points = getPoints(numGame,numPlayer);
    console.log('os pontos sao: ', points);
    
}

function getPoints(matrizGame,matrizPlayer){
    let output = 0;
    for(let i=0; i<matrizPlayer.length;i++){ //rows
        let points = 0;
       for(let j=0; j<matrizPlayer[i].length; j++){ //lines
            if(matrizGame[i].includes(matrizPlayer[i][j]) && matrizPlayer[i][j]!==''){
                if(points ===0) points++;
                else points *= 2;
            }
            
          
          
        }
        output += points;

    }
    return output;
}
function findIndex(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(":")) {
        return i; // Retorna o índice da primeira string que contém ":"
      }
    }
    return -1; // Retorna -1 se nenhum ":" for encontrado
  }
function getNumbersGame(array){
    let matrizNumbers = [];
    for(let index = 0; index<array.length; index++){ //lines
        let str = array[index].toString();
       // console.log(str);
        str = str.split(" ");
        let posFinal = str.indexOf('|');
        let posInitial = findIndex(str)+1;
        const lin = [];
        for(let j=posInitial; j<posFinal; j++){ //rows
            lin.push(str[j]);
        }
        matrizNumbers.push(lin);
    }
    return matrizNumbers;
}
function getNumbersPlayer(array){
    let matrizNumbers = [];
    for(let index = 0; index<array.length; index++){ //lines
        let str = array[index].toString();
       // console.log(str);
        str = str.split(" ");
        let posInitial = str.indexOf('|')+1;
        const lin = [];
        for(let j=posInitial; j<str.length; j++){ //rows
            lin.push(str[j]);
        }
        matrizNumbers.push(lin);
    }
    return matrizNumbers;

}
main();
