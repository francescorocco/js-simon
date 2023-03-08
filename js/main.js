// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const saimonSaysDom = document.getElementById('saimon-says');
const foundNumbersDom = document.getElementById('found-numbers');
let numberList = [];



//genero i 5 numeri casuali per il giocatore
for(let i = 0; i < 5; i++){
    let generateNumber = uniqueNumber(numberList, 1, 100);
    numberList.push(generateNumber);
}

saimonSaysDom.innerHTML = numberList

//faccio scomparire i numeri dopo tot tempo

// setTimeout(hide (saimonSaysDom), 30000);
setTimeout(function(){
    saimonSaysDom.classList.add('d-none');
},30000);


//chiedo all' untente di inserire i numeri che ricorda
setTimeout(function(){
    let numero;
    let userNumbers = [];
    let foundNumbers = [];

    while(userNumbers.length < 5){
        numero = parseInt(prompt('Scrivi i numeri che ti ricordi, uno alla volta'));

        if(!userNumbers.includes(numero)){
            userNumbers.push(numero);
        } 
    }
    for(let i = 0; i < userNumbers.length;i++){
        const numberToVerify = userNumbers[i]

        if(numberList.includes(numberToVerify)){
            foundNumbers.push(numberToVerify);
        }
    }
    if(foundNumbers.length === 0){
        foundNumbersDom.innerHTML = ('Mi dispiace non hai indovinato nessun numero');
    }else{
        foundNumbersDom.innerHTML = `Complimenti i numeri che hai idovinato sono ${foundNumbers.length} e sono i numeri ${foundNumbers}`;
    }
    
    
}, 32000);



//creazione numero casuale
function randomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min +1)) + min;
    return number;
}


//creazione numero casuale escludendo ripetizioni
function uniqueNumber(numberList, min, max){
    let esiste = true;
    let generateNumber;

    while(esiste){
        generateNumber = randomNumber(min, max);
        if(!numberList.includes(generateNumber)){
            esiste = false;
        }
    }
    return generateNumber;
}

//funzione per nascondere elementi del dom
// function hide(objectToHide){
//     objectToHide.classList.add('d-none');  
// } 