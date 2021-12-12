/*you can have it on one condition..!

Human beings (and other animals) make decisions all the time that affect their lives, from small  to large ("should I stay in my home country and work on my father's farm, or should I move to America and study astrophysics?")

Conditional statements allow us to represent such decision making in JavaScript, from the choice that must be made (for example, "one cookie or two"), to the resulting outcome of those choices (perhaps the outcome of "ate one cookie" might be "still felt hungry", and the outcome of "ate two cookies" might be "felt full, but mom scolded me for eating all the cookies".)

if else statement 
Let's look at by far the most common type of conditional statement you'll use in JavaScript — the humble if...else statement.
syntax:
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}

-the keyword `if` followed by parentheses and curlybracket's 
-the parentheses store condition your code inside  curlybracket's will going to execute or not
    and curlybracket's have code which you want to run.
-`else` is same as `if` but else will execute only when if condition is set to `false`

-if you have multiple conditions you can use

if (condition) {
  code to run if condition is true
} else if (condition){
  run some other code instead
} else if (condition){
  run some other code instead
} else {this wil execute only when all the above wil fail.}
*/


/*As a final point, you may sometimes see if...else statements written without the curly braces, in the following shorthand style:
    syntax:->
        if (condition) code to run if condition is true
        else run some other code instead

This is perfectly valid code, but using it is not recommended — it is much easier to read the code and work out what is going on if you use the curly braces to delimit the blocks of code, and use multiple lines and indentation. 

you can nest if statement also like this

if (condition){
    if (condition){

    }else{

    }
}
*/