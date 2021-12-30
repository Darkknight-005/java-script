/*The comma operator (,) evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. It is regarded bad style to use it elsewhere, when it is not necessary. Often two separate statements can and should be used instead.  */
console.log("\nHere is an example with multiple of 2.\n")
for (i = 0, j = 5 ; i <=5, j < 10; j++ ,i++){
    let y = 2;
    console.log(y*i+"-"+y*j);
}
