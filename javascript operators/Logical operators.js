/*
There are three logical operators
Operator 	                Usage 	                Description
Logical AND (&&) 	        expr1 && expr2 	        Returns expr1 if it can be converted to false; otherwise,
                                                    returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.

Logical OR (||) 	        expr1 || expr2 	        Returns expr1 if it can be converted to true; otherwise, 
                                                    returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.

Logical NOT (!) 	        !expr 	                Returns false if its single operand that can be converted to 
                                                    true; otherwise, returns true. 
*/

/*summary :
1:-if your using logical and `&&`
make sure both side of operator returns ture unless it won't run the statement 

2:-if your using ligical or `||`
make sure both side of operator returns false unless it won't jump to other next statement.

3:-if your using logical not `!`
make sure it use only right hand operand 
    --> { like this (! ture) or (!false)
          not like this (true ! false) or vise versa.}
and if you want to "run a statement" then set the condition to "false" the operator will convert it "true" or vise versa. 
 */
let x = [0,1]
for(i = 1 ; i < 2; i++){
    let y = (false && (i > 2)) ? x[0]:x[1] ;
    let z = ((x[1] < 0)  || (i > 2)) ? x[0]:x[1];
    let w = (!(x[0] < i)) ? x[0]:x[1];
    console.log("1->"+y+"\n2->"+z+"\n3->"+w)
}
