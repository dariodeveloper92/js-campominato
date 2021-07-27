//ESERCIZIO CAMPO MINATO:
//1) Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.

//VARIABILI
var min = 1;
var max = 100;
var lista_bombe = []; 
var numBombe = 16;

///creo array con le mie bombe : 16 bombe
let text = "";
let i = 0;
while (i < numBombe) {
    var numeroPc = rndNumber(min, max);
    lista_bombe.push (numeroPc);
    if(userNumber =  numeroPc) {
        result = false;
    }   else {
        result = true;
    }
      i++;
}
/*
//creo array vuoto che conterrà i numeri scelti dall'utente
let numeri_utenti = [];
let conteggio = 0;
let possibilita = max - numBombe;

while (numeri_utenti.length < possibilita && (controllo_bombe(numeri_utenti, userNumber)) != true) {

    //TODO: richiedo all'utente un numero incluso tra 1 e 100
    userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
}   
*/
//SEZIONE FUNZIONI:

//Funzione - Numero Casuale
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(lista_bombe);

//Funzione controllo sulle bombe
function controllo_bombe(lista_bombe, userNumber) {
    var find = false;
    for (let i = 0; i < lista_bombe.length; i++) {
        if (lista_bombe[i] == userNumber) {
            find = true;
        }
    }
    return find; 
} 
//2) I numeri non possono essere duplicati.


//3) In seguito deve chiedere all’utente (100 - 16(ovvero 84)) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

//Inserire 84 numeri 
for (i = 1; i <= 2; i++) {//corregere 2 con 84
    userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
    console.log('numero utente ' + userNumber);
} 
//4) L’utente non può inserire più volte lo stesso numero.

//5) Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

//CONDIZIONE " IF ":
if (userNumber ==  numeroPc) {
    console.log("Giocatore perde!");
    
}
else {
    console.log("Giocatore vince!");
}

//CONDIZIONE " SWITCH ":
/*
var operazione = risultato;
var risultato = 0;

switch(operazione) {
    case 'perso':
        risultato = userNumber =  numeroPc + 'hai perso!';
        break;
    case 'vinto':
        risultato = userNumber != numeroPc + 'hai vinto!';
        break;
    default:
        risultato = 'hai perso!' || 'hai vinto!';
}

console.log('Il risultato è ' + risultato);
*/

//6) La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var numVietato = numeroPc;

if (numVietato) {
    console.log("Giocatore perde!");
    
}
else {
    console.log("Giocatore vince!");
}

//7) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



//PARTE GRAFICA------------------------------------------------------------------------------------------------------------------------

function creaCampo(celle) {

    for(let i = 1; i <= celle; i++) {
        let cella= `
        <div data-cella="${i}" class="cella"></div>
        `;

        let templateCella = document.createElement('DIV');
        templateCella.classList.add('quadrato');
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);
    }
}

document.getElementById('campo').addEventListener('click',
    function(e) { //e = event
        console.log(e.target.dataset.cella);
        let element = document.querySelectorAll("data-cella='" + e.target.dataset.cella + "']"); 
        console.log(element[0]);
        element[0].classList.add("red");
    }
)

creaCampo(100);
