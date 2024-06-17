

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
I datatype sono tipi di dati o valori che servono per assegnare delle variabili al linguaggio in sè(JavaScript)
Abbiamo 5 tipi di datatype:
1-Stringhe, indica un singolo carattere o sequenze di carattere e vengono definiti attraverso gli apici o le virgolette che possono essere singoli o doppi.
2-Dato numerico: Appunto come definisce la parola stessa si esprime attraverso dei numeri che possono essere interi o decimali(Il decimale si esprime con il punto)
3-Dato booleano: Il quale lo si esegue con solo 2 valori: True e false utile per prendere decisioni nel nostro codice.
4-Null: Ci informa dell'assenza intenzionale di un valore ma è diverso del valorer numerico 0.
5-Undefined: E' una variabile a cui non è stato assegnato nessun tipo di valore, acqusirà valore successivamente.*/


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Andrea";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

// soluzione 1

let sum = 12 + 20;
console.log(sum); 

// soluzione 2
let num1 = 12;
let num2 = 20;
let sum2 = num1 + num2;
console.log(sum2);

// soluzione 3
console.log(num1 + num2); 


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

// soluzione1
let x = 12;
x = 12;
console.log(x);

// soluzione2
let x2 = 12;
console.log(x2);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// soluzione1
myName = "Iemma";
console.log(myName);

const myConst = "Iemma"
console.log(myConst);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

// soluzione1
let sottrazione = x - 4;
console.log(sottrazione);

// soluzione2
let num3 = 4;
let sottrazione2 = x - num3;
console.log(sottrazione2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

// soluzione1
let name1 = "John";
let name2 = "john";

const verify = name1 !== name2 ? "name 1 è diverso da name2" : "name 1 è identico a name2"
console.log(verify);

// soluzione2
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

const verify2 = name1 !== name2 ? "name 1 è diverso da name2" : "name 1 è identico a name2"
console.log(verify2);


