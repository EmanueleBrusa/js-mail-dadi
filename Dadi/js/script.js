//funzione per generare un numero da 1 a 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

//genera punteggio giovatore vs pc
const punteggio_giocatore = rollDice();
const punteggio_pc = rollDice();

// Determina il vincitore
let winner;

if (punteggio_giocatore > punteggio_pc) {
  winner = "Giocatore";
} else if (punteggio_giocatore < punteggio_pc) {
  winner = "Computer";
} else {
  winner = "Pareggio";
}

// Stampa il vincitore
alert("Il vincitore è: " + winner);