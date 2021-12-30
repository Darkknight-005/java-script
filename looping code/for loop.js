/*
for loop are divided into two type 
standard for loop 
and 
for ..of loop
*/

// *************   this is standard for loop ***************

// for (let i = 1; i < 10; i++) {
//     // console.log(newResult)
//     if (i === 1){
//         for(let x = 1; x <= 10; x++){
//         const newResult = `${i} x ${x} = ${i * x}`;
//         console.log(newResult)
//     }console.log("\v")}else if (i === 2){for(let x = 1; x <= 10; x++){
//         const newResult = `${i} x ${x} = ${i * x}`;
//         console.log(newResult)
//     }console.log("\v")}
//     else if (i === 3){for(let x = 1; x <= 10; x++){
//         const newResult = `${i} x ${x} = ${i * x}`;
//         console.log(newResult)
//     }console.log("\v")}
//     else if (i === 4){for(let x = 1; x <= 10; x++){
//     const newResult = `${i} x ${x} = ${i * x}`;
//         console.log(newResult)
//     }console.log("\v")
// }
// }

//******************* this is for ..of loop ******************

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (const cat of cats) {
//   console.log(cat);
// }


// ****************** this is example when some time use standrd code for iteration *******************


// const cats = ['Pete', 'Biggles', 'Jasmin'];

// let myFavoriteCats = 'My cats are called ';

// for (let i = 0; i < cats.length; i++) {
//   if (i === cats.length - 1) {   // We are at the end of the array
//     myFavoriteCats = `${myFavoriteCats}and ${cats[i]}.`
//   } else {
//     myFavoriteCats = `${myFavoriteCats}${cats[i]}, `
//   }
// }

// console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmin."

// ********************* how for loop works **************************

// for (initializer; condition; final-expression) {
//   // code to run
// }
//  if you want to break for loop before all iteration complete use `break`