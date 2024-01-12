const fs = require('fs/promises');
async function main(){
    const buffer = await fs.readFile('./day-four/inputtest.txt','utf-8');
    const file = buffer.split('\n');
    let numGame = [];
    let numPlayer = [];
    numGame = getNumbersGame(file);
    numPlayer = getNumbersPlayer(file);
    let matchNumbers = getMatchNumbers(numGame,numPlayer);
    let finalcards = getcards(matchNumbers);
    let sum = finalcards.reduce((a,b)=>parseFloat(a)+parseFloat(b),0);
    console.log(sum);
    
}
function isNumber(str){
    const num = Number(str);
    return !Number.isNaN(num);
}
function getcards(matchNumbers){
    let cards = matchNumbers.length;
    let finalCards = [];
    let num = 0;
    let count =1;
    for(let index = 0; index<cards; index++){
        finalCards[index] = 1; 
    }
    for(let index = 0; index<cards; index++){  
        if(matchNumbers[index]!==0){
            for(let j = index+1;j<(matchNumbers[index]+index+1);j++){
               console.log('j: ', j);
              console.log('matchNumber: ',matchNumbers[index]);
                console.log(finalCards[j]);
                finalCards[j] += count;
               console.log('final final cards: ',finalCards[j]);
                }
            }
        }
           console.log(finalCards);
           return finalCards;

    }
    

function getMatchNumbers(matrizGame,matrizPlayer){
    let output = 0;
    let matchNumbers = [];
    for(let i=0; i<matrizPlayer.length;i++){ //rows
        let cardsOwned = 0;
        for(let j=0; j<matrizPlayer[i].length; j++){ //lines
            if(matrizGame[i].includes(matrizPlayer[i][j]) && matrizPlayer[i][j]!==''){
                cardsOwned++;  
            }      
        }
        matchNumbers.push(cardsOwned);
    }
    //(matchNumbers);
    return matchNumbers;
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
