// ES 1
// Scrivere una funzione che prenda come input un numero e generi un array composto da n numeri casuali compresi tra 1 e 10.

// Esempio: Input= 5    Output= [5, 9, 1, 6, 10]

// function n(numeber) {
//          let array = [];
//          for(let i = 1; i <= number; i++){
//              array.push(Math.floor(Math.random() * (10 - 1 + 1)))
//          }
//          return array
//      }

//      console.log (n(10));
//      console.log (n(5));





// ES2
// Metti un po' d'ordine
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
//   Variante:
//   Prova ad ordinali in modo crescente.


//   let numbers =[3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
//   console.log (numbers)
//   let numbersDecreasing= numbers.sort((a,b) => b-a);
//   console.log(numbersDecreasing);



  




// ES 3
// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

//      function number (n) {

//      if (n > 0 && n < 9999){
//          if (n < 10) {
//              return 1;
//          }
//          else if (n < 100) {
//              return 2;
//          }
//          else if (n < 1000) {
//              return 3;
//          }
//          else {
//              return 4;
//          }
//      } 
//      else {
//          return 'numero non valido'
//      }
// }

//  console.log(number(3900));

    




// ES4
// Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
//   FALSE altrimenti.
//   Esempi:
//     Input: n = 2, m = 3
//     Output: FALSE
//     Input: n = 2, m = '2'
//     Output: FALSE
//     Input: n = 2, m = 2
//     Output: TRUE 


// function argument (n, m)  {
//     if (n==m) {
//     return true;
// } else {
//     return false;
// }

// }

// console.log(argument(4,6))
// console.log(argument(6,6))




// ES5
// Scrivi una funzione che dato un numero stampi la tabellina corrispondente.

//  let num = 5

//  function tableNum(n){
//          for(let i =0; i<=10; i++){
//              let table= n *i;
//              console.log(`${n} x ${i} = ${table}`);
//          }
//      }
    
//      tableNum(num);
    