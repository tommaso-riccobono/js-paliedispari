//Chiedere all’utente di inserire una parola 
    /*const parola = prompt('inserisci una parola')
    parolaDivisa = parola.split('');
    console.log(parolaDivisa);*/


//&Creare una funzione per capire se la parola inserita è palindroma

function polidroma() {
    const parola = prompt('inserisci una parola')
    parolaDivisa = parola.split('');
    return parolaDivisa;
}

let fine = polidroma()

console.log(fine)


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri.
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

const utente = prompt('pari o dispari?');
const numeroUtente = prompt('inserisci un numero da 1 a 5');

function randomNumber(min, max) {
    const risultato = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return risultato;
}

let numeroComp = randomNumber(1, 5);

function sommaNumeri(numeroUtente, numeroComp) {
    let risultato = (numeroUtente + numeroComp);
    return risultato;
}

let somma = sommaNumeri(1, 5);

console.log(somma)

if (somma % 2 == 0) {
    console.log('vince il numero pari');
} else {
    console.log('vince il numero disppari');
}
