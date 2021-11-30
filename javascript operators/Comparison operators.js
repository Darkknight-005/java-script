/*
A comparison operators compare its operands and returns a logical value based on whether the comparsion is true.
The operands can be numerical, string, logical, or object value.

let var1 = 2;
let var2 = 3;

    operators                                       desecription                                examples returning true
1. Equal (==)                           return true if operands are equal.                      2 == var1 
                                                                                                or "2" = var1
2. Not equal (!=)                       return true if operands are not equal.                  1 == var1 
                                                                                                or "5" = var1

3. Strcit equal (===)                   return true if the operands are equal
                                        and of the same type.

4. Strcit not equal (!==)               return ture if operands are the same
                                        type but not equal, or are of different type. 

5. Greater than (>)                     return true if left operand is greater
                                        than right operand.

6. greater than or equal (>=)           return true if left operand is greater 
                                        than or equal to right operand.

7. less than (<)                        return ture if left operand is 
                                        less than right operand.

8. less than or equal (<=)              return ture if left operand is 
                                        less or equal to right operand
*/

let Operator = true,    // change true to false for next while section
notice = `Notice:\n\t You have to change if statement "one by one" as written in comment above every "if statement". \n\t don't forget to revert after every run.\n`;
console.log(notice)

while(Operator === true){ 
    
            /*This while section consist only Equal, strict, greater_than, less_than with the two factors.
        
            1. factor which have operand `int` comparison operator and value 5 .
                Here 5 is in number form.
            2. factor which have operand `int` comparison operator and value "5" .
                Here "5" is in string from.
            */
        
            let  common_line = 'This is integer condition with ',
            d_equal = common_line +'double equal and this is equal',
            s_equal = common_line +'triple equal and this is strict equal',
            greater_than = common_line +'greater than and this is greater',
            less_than = common_line +'less than and this is lesser';
        
            let common_line1 = 'This is string condition with same integer with',
            d_equal1 = common_line1 +'double equal and this is equal',
            s_equal1 = common_line1 +'triple equal and this is strict equal',
            greater_than1 = common_line1 +'greater than and this is greater',
            less_than1 = common_line1 +'less than and this is lesser';
            
            let int = 5;

            // double equal operator
            // change the condition int == 4 to int == 5
        
            if (int == 4){
                console.log("1. "+d_equal)
            }
            // change the condition int == "4" to int == "5" 
            
            else if(int == "4"){
                console.log("2. "+d_equal1)
            }
            // strict equal operator
            // change the condition int === 4 to int === 5 
        
            else if (int === 4){
                console.log("3. "+s_equal)
            }
            // greater than operator
            // change the condition int > 5 to int >  4
        
            else if (int > 5){
                console.log("4. "+greater_than)
            }
            // Less than operator
            // change the condition int < 5 to int <  6  
            
            else if (int < 4){
                console.log("5. "+less_than)
            }            
            
            else{
                console.log('Wrong or nothing change: \n\t\t You have done something wrong that\'s why you seeing this message.')
            };
            break ;
        };
while(Operator === false){
    
            /*This while section consist only exclamation_Equal, exclamation_strict, greater_than_or_equal, less_than_or_equal
             with the two factors.

            1. factor which have operand `int` comparison operator and value 5 .
                Here 5 is in number form.
            2. factor which have operand `int` comparison operator and value "5" .
                Here "5" is in string form.
            */

            let common_line = 'This is integer condition with ',
            e_equal = common_line +'exclamation equal and this is not equal',
            e_d_equal = common_line +' exclamation double equal and this is strict not equal.',
            greater_than_e = common_line +'greater than or equal and this is greater or equal.',
            less_than_e = common_line +'less than or equal and this is lesser or equal.';

            let common_line1 = 'This is string condition with same integer with ',
            e_equal1 = common_line1 +'exclamation equal and this is not equal.',
            e_d_equal1 = common_line1 +'exclamation double equal and this is not equal.',
            greater_than_e1 = common_line1 +'greater than or equal and this is greater or equal.',
            less_than_e1 = common_line1 +'less than or equal and this is lesser or equal.';


            let int = 4;
            // equal operator
            // change the condition int == 4 to int == 5

            if (int != 4){
                console.log("1. "+e_equal)
            }
            // change the condition int ==

            else if(int != "4"){
                console.log("2. "+e_equal1)
            }
            // strict equal operator
            // change the condition int === 4 to int === "4" 

            else if (int !== 4){
                console.log("3. "+e_d_equal)
            }
            // greater than or equal operator
            
            // change the condition int >= 5 to int >= 4

            else if(int >= 5){
                console.log("5. "+greater_than_e1)
            }
            // Less than or equal operator
            // change the condition int <= 3 to int <=  4  

            else if (int <= 3){
                console.log("6. "+less_than_e)
            }
            else{
                console.log('Wrong or nothing change: \n\t\t You have done something wrong that\'s why you seeing this message.')
            };
            break ;
        };

/*note: (===) and (>) (<) (>=) (<=)with string and number. create blunder's. So try in seprate sample code and then use it in main file.*/
