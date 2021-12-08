/*
conditional (ternary) operator.,
this is only operator which takes 3 operands as follow
    condition ? exprIfTrue : exprIfFalse
        1           2           3

* The first one "1" is condition like normally 
    example:-> input === 2, input < 50 and input === "hello" || input === "welcome" etc.,

* The second one "2" is expression which will execute if condition satisfy.
    In expression you can add what you want to display if `true`.

* The second one "3" is expression which will execute if condition don not satisfy.
    In expression you can add what you want to display if `false`.
*/ 
let x = "welcome", y = "welcome";   // change the any one variable to any other word and see what happend
const z = (x === y) ? "yes":"no"
console.log(z)

// this is also use as alternative of if statement