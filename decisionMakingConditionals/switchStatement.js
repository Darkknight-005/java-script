/*For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

In such a case, switch statements are your friend — they take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:
*/

void function myFunction() {
    const choice = "sunny";
  
    switch (choice) {
      case 'sunny':
        console.log("sunny season")      
        break;
      case 'rainy':
        console.log("rainy season")      
        break;
      case 'snowing':
        console.log("snowing season")      
        break;
      case 'over':
          console.log("overcast")      
        break;
      default:
        console.log("default")      
    }
}()

/*
remember you have to break after every case with `break` keyword or it will fall through 

try comment out all `break` and see what happend.*/