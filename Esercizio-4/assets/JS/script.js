/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("***** Esercizio 1 *****")
/* SCRIVI QUI LA TUA RISPOSTA */

function area(b, h) {
    return b * h;
}

console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("***** Esercizio 2 *****")
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {
    if (a === b) {
        return 3 * (a + b);
    } else {
        return a + b;
    }
}

console.log(crazySum(5, 5));
console.log(crazySum(5, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("***** Esercizio 3 *****")
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num) {
    let diff = Math.abs(num - 19);
    if (num > 19) {
        return diff * 3;
    } else {
        return diff;
    }
}
console.log(crazyDiff(25)); // Dà 18 perché 25 è maggiore di 19, quindi ritorna (25-19)*3
console.log(crazyDiff(10)); // Dà 9 perché 10 non è maggiore di 19, quindi ritorna 19-10

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("***** Esercizio 4 *****")
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("***** Esercizio 5 *****")
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("***** Esercizio 6 *****")
/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("***** Esercizio 7 *****")
/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(EPICODE) {
    let codeepic = "EPICODE";
    return codeepic.split('').reverse().join('');
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("***** Esercizio 8 *****")
/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
    let words = string.split(' ');
    console.log(words);
    let final = [];
    for (let i = 0; i < words.lenght; i++) {
        let first = word[i].charAt(0);
        first = first.toUppercase();
        let cut = words[i].slice(1);
        let newWords = first + cut;
        final.push(newWords);

    }
    console.log(final.join(' '));
}

upperFirst("oggi è il venti giugno duemilaventiquattro e siamo in aula per il corso epicode")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("***** Esercizio 9 *****")
/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("***** Esercizio 10 *****")
/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let casualnumber = [];
    for (let i = 0; i < n; i++) {
        casualnumber.push(Math.floor(Math.random() * 10));
    }
    return casualnumber;
}
console.log(giveMeRandom(5));

