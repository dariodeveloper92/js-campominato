//ESERCIZIO CAMPO MINATO:
//1) Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.

//variabili
var min = 1;
var max = 100;

//16 volte
var numeroPc1 = rndNumber(min, max);
var numeroPc2 = rndNumber(min, max);
var numeroPc3 = rndNumber(min, max);
var numeroPc4 = rndNumber(min, max);
var numeroPc5 = rndNumber(min, max);
var numeroPc6 = rndNumber(min, max);
var numeroPc7 = rndNumber(min, max);
var numeroPc8 = rndNumber(min, max);
var numeroPc9 = rndNumber(min, max);
var numeroPc10 = rndNumber(min, max);
var numeroPc11 = rndNumber(min, max);
var numeroPc12 = rndNumber(min, max);
var numeroPc13 = rndNumber(min, max);
var numeroPc14 = rndNumber(min, max);
var numeroPc15 = rndNumber(min, max);
var numeroPc16 = rndNumber(min, max);

//Funzione - Numero Casuale
function rndNumber(min, max) {
    for (i = 1; i <= 16; i++) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
console.log(numeroPc1, numeroPc2, numeroPc3, numeroPc4, numeroPc5, numeroPc6, numeroPc7, numeroPc8, numeroPc9, numeroPc10, numeroPc11, numeroPc12, numeroPc13, numeroPc14, numeroPc15, numeroPc16);


//2) I numeri non possono essere duplicati.


//3) In seguito deve chiedere all’utente (100 - 16(ovvero 84)) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//Inserire 84 numeri 
for (i = 1; i <= 84; i++) {
    userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
    console.log('numero utente ' + userNumber);
    document.write('numero utente ' + userNumber + '<br>' );
} 

//4) L’utente non può inserire più volte lo stesso numero.
while(isNaN(userNumber)) //E' CORRETTO?

//5) Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

//CONDIZIONE " SWITCH ":

var operazione = prompt('Inserisci l/operzione da compiere');
var risultato = 0;

switch(operazione) {
    case 'perso':
        risultato = userNumber =  numeroPc1;
        break;
    case 'continua':
        risultato = userNumber != numeroPc1;
        break;
    default:
        risultato = "Partita terminata!";
}

console.log('Hai vinto!  ' + risultato);

/*
//CONDIZIONE " IF ":
if (userNumber == numeroPc1) {
    console.log('Partita terminata!')
} else {
    console.log('Continua');
} 
*/

//6) La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.


//7) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
