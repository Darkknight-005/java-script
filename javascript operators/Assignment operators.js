/*
Name                              Shorthand                            Meaning
Assignmnet                          x = 1                               x = 1
Addition assignment 	            x += f() 	                        x = x + y
Subtraction assignment 	            x -= f() 	                        x = x - y
Multiplication assignment 	        x *= f() 	                        x = x * y
Division assignment 	            x /= f() 	                        x = x / y
Remainder assignment 	            x %= f() 	                        x = x % y
Exponentiation assignment 	        x **= f() 	                        x = x ** y
Left shift assignment 	            x <<= f() 	                        x = x << y
Right shift assignment 	            x >>= f() 	                        x = x >> y
Unsigned right shift assignment     x >>>= f() 	                        x = x >>> y
Bitwise AND assignment 	            x &= f() 	                        x = x & y
Bitwise XOR assignment 	            x ^= f() 	                        x = x ^ y
Bitwise OR assignment 	            x |= f() 	                        x = x | y
Logical AND assignment 	            x &&= f() 	                        x && (x = y)
Logical OR assignment 	            x ||= f() 	                        x || (x = y)
Logical nullish assignment          x ??=f()                            x ?? (x = y)
*/

const fun = false;
let sep = "\n";
let x = 10;
if( fun === true){
    console.log(sep);
    x +=20;
    console.log(`1.Addition assignment`+' \t\t\t--> '+x);
    x -=2;
    console.log(`\n2.Subtraction assignment`+' \t\t--> '+x);
    x *=5;
    console.log(`\n3.Multiplication assignment`+' \t\t--> '+x);
    x /=3;
    console.log(`\n4.Division assignment`+' \t\t\t--> '+x);
    x %=3;
    console.log(`\n5.Remainder assignment`+' \t\t\t--> '+x);
    x **=2;
    console.log(`\n6.Exponentation assignment`+' \t\t--> '+x);
    x <<=2;
    console.log(`\n7.left shift assignment`+' \t\t--> '+x);
    x >>=2;
    console.log(`\n8.right shift assignment`+' \t\t--> '+x);
    x >>>=2;
    console.log(`\n9.unsigned right shift assignment`+' \t--> '+x);
    x &=2;
    console.log(sep)
}else{
    x &= 2;
    console.log(`\n10.Bitwise AND assignment`+' \t--> '+x);
    x ^=2;
    console.log(`\n11.Bitwise XOR assignment `+' \t--> '+x);
    x |=5;
    console.log(`\n12.Bitwise OR assignment`+' \t--> '+x);
    x ||=1;
    console.log(`\n13.logical AND assignment`+' \t--> '+x);
    x &&=6;
    console.log(`\n14.logical OR assignment`+' \t--> '+x);

    const Default = `you will see this if you change global const 'fun'. Ok remember to set as it is true`;
    console.log(Default);
}
