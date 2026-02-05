// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// Genero un numero random da 1 a 6 per il giocatore utilizzando parseInt perchè vogliamo solo numeri interi senza decimali o altro
// Con math.random genero un numero del tutto casuale in questo caso compreso da 1 a 6 
const dadoGiocatore = parseInt (Math.random() * 6) + 1;
const dadoComputer = parseInt (Math.random() * 6) + 1;

// Stampo i risultati sia del giocatore che del pc
console.log("Dado giocatore:", dadoGiocatore);
console.log("Dado computer:", dadoComputer);

// Creo una condizione if dove:
// Se il numero random del giocatore è maggiore del pc, ha vinto il giocatore!!
if (dadoGiocatore > dadoComputer) {
    console.log("Hai vinto! 🏆");

// Se il numero random del giocatore è minore del pc, ha vinto il pc!!
} else if (dadoGiocatore < dadoComputer) {
    console.log("Ha vinto il computer 💻");

// Altrimenti se i numeri sono uguali c'è un pareggio
} else {
    console.log("Pareggio 🤝");
}