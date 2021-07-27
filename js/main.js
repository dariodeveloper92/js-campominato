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
    console.log(lista_bombe);
    /*if(userNumber ==  numeroPc) {
        result = false;
    }   else {
        result = true;
    }*/
      i++;
}

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
        console.log(lista_bombe.includes(e.target.dataset.cella));
        console.log(lista_bombe);
        if (lista_bombe.includes(parseInt(e.target.dataset.cella))) {
            alert('hai perso!');
        
        let element = document.querySelectorAll("[data-cella='" + e.target.dataset.cella + "']"); 
        console.log(element[0]);
        element[0].classList.add("red");
    }
    }
)

creaCampo(100);