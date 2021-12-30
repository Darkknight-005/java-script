/*
    Operator                    Description                                             Example 
1. Renainder(%)             Binary opertor. Returns the integer remainder             12 % 5 returns 2
                            of dividing the two operands.

2. Increments(++)           Increment operator Adds one to its operands.              if x = 3, then ++x sets x  
                            if used as a prefix operator(++x), returns                to 4 and then returns 4,
                            the value of its operand after adding one                 whereas x++ returns 3 and 
                            : if used as postfix operator(x++), returns the           then sets x to 4.
                            value of its operand before adding one.                     

3. Decrement(--)            Decerement operator, subtract on from its oerand.         if x= 3, then --x sets x to
                            the return value is analogousto that for the increment    2 and then returns 2,whereas
                            operator.                                                 x-- returns 3 and then sets x
                                                                                      to 2
4. Unary negation(-)        Unary negeation. returns the negation of its operand.     if x = 3, then -x returns -3

5. unary plus(+)                 Unary plus. attempt to convert the operand to a number    if x = "3", then +x returns
                            ,if it is not alredy.                                     +x.
                                                                                      +true returns 1.
6. Exponentation           Calculate the base to the exponent power, that is,        2 ** 3 returns 8
    operator(**)            base^exponent.                                             10 ** -1 returns 0.1.

*/

// change var x  between these units 3, 12 and "3".
// for initial it set to 0
var x = 0;  
    if(x === 12){
        let y = x % 5;
        console.log("-->"+y+" This is the remainder of 12 % 5")
    }else if (x === 3){
        let y = --x;
        console.log("-->"+y+" This is the decrement of x = 3 to x = 2")
        y = ++x;
        console.log("-->"+y+" This is the increment of x = 2 to x = 3 because aobve line updated the x.")
        y = -x;
        console.log("-->"+y+" This is the unary negation x = 3 to x = -3 because aobve line updated the x.")
        // negation means opposite of something.
    }else if(x === "3"){
        // comment let y = +x; this line out and see you will recive error
        // because x have type of string value and let y = +x; convert it to number
        let y = +x;              
        console.log("-->"+y+" This is the unary plus this will convert string number to numerical from.")
        y **= x;
        console.log("-->"+y+" This is the result 3**3 means 3 *3*3 is 27 ")
    }else{ console.log('\n-->\tplease follow the commented instruction.\n')}
