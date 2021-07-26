//ESERCIZIO CAMPO MINATO:
//1) Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.

//variabili
var min = 1;
var max = 100;
var bombe = []; 

//16 volte
let text = "";
let i = 0;
while (i < 16) {
    var numeroPc = rndNumber(min, max);
    bombe.push (numeroPc);
    if(userNumber =  numeroPc) {
        result = false;
    }   else {
        result = true;
    }
      i++;
}

//Funzione - Numero Casuale
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(bombe);

//2) I numeri non possono essere duplicati.


//3) In seguito deve chiedere all’utente (100 - 16(ovvero 84)) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//Inserire 84 numeri 
for (i = 1; i <= 2; i++) {
    userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
    //console.log('numero utente ' + userNumber);
    //document.write('numero utente ' + userNumber + '<br>' );
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
