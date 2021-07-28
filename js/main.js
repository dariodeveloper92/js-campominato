//ESERCIZIO CAMPO MINATO:
//1) Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.

//VARIABILI
var min = 1;
var max = 100;
var lista_bombe = []; 
var numBombe = 16;
var maxMedium = 80;//LIVELLO MEDIO
var maxHard = 50;// LIVELLO DIFFICILE

///creo array con le mie bombe : 16 bombe
let text = "";
let i = 0;
while (i < numBombe) {
    var numeroPc = rndNumber(min, max);
    lista_bombe.push (numeroPc);
    //console.log(lista_bombe);
    /*if(userNumber ==  numeroPc) {
        result = false;
    }   else {
        result = true;
    }*/
      i++;
}

//SEZIONE FUNZIONI:

//con difficoltà 0 => tra 1 e 100
//Funzione - Numero Casuale - EASY------------------------------------------------------------
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//console.log(lista_bombe);

//Funzione controllo sulle bombe-------------------------------------------------------
function controllo_bombe(lista_bombe, userNumber) {
    var find;
    for (let i = 0; i < lista_bombe.length; i++) {
        if (lista_bombe[i] == userNumber) {
            find = true;
        }
        else {
            find = false; 
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
        //console.log(lista_bombe);
        if (lista_bombe.includes(parseInt(e.target.dataset.cella))) {
            alert('hai perso! Ritenta!!!');
        
        let element = document.querySelectorAll("[data-cella='" + e.target.dataset.cella + "']"); 
        console.log(element[0]);
        element[0].classList.add("red");
        element[0].classList.add("btn-play");
    }
    }
)

creaCampo(max || maxMedium ||  maxHard);//SISTEMARE SCEGLI LIVELLO

// FINE PARTE GRAFICA------------------------------------------------------------------------------------------------------------------------/

//BONUS:------------------------------------------------------------------------------------------------------------------------ 

//con difficoltà 1 => tra 1 e 80
//Funzione - Numero Casuale - MEDIUM
function rndNumber(min, maxMedium) {
    return Math.floor(Math.random() * (maxMedium - min)) + min;
}
//console.log(lista_bombe);

//con difficoltà 2 => tra 1 e 50
//Funzione - Numero Casuale - HARD
function rndNumber(min, maxHard) {
    return Math.floor(Math.random() * (maxHard - min)) + min;
}
console.log(lista_bombe);


//FUNZIONE HAMBURGER
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  //FINE BONUS:------------------------------------------------------------------------------------------------------------------------/


  //RESET
  function reset_creaCampo() {
      document.getElementById("creaCampo").innerHTML=''
  }
  //DA FARE:
  //1) REFRESH DELLA PAGINA - REMOVE
  //2) ATTIVAZIONE DIFFICOLTA - DIMUNISCONO LE CELLE
  //3) INSERIRE I NUMERI NELLE CELLE