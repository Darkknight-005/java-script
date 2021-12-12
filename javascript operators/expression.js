/*
An expression is any valid unit of code that resolves to a value.

Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluate and therefore resolve to a value. 

JavaScript has the following expression categories:

    Arithmetic: evaluates to a number, for example 3.14159. (Generally uses arithmetic operators.)
    String: evaluates to a character string, for example, "Fred" or "234". (Generally uses string operators.)
    Logical: evaluates to true or false. (Often involves logical operators.)
    Primary expressions: Basic keywords and general expressions in JavaScript.
    Left-hand-side expressions: Left values are the destination of an assignment.

primary expression:

THIS

 Use the this keyword to refer to the current object. In general, this refers to the calling object in a method. Use this either with the dot or the bracket notation: 

this['propertyName']
this.propertyName

new

You can use the new operator to create an instance of a user-defined object type or of one of the built-in object types. Use new as follows: 
var objectName = new objectType([param1, param2, ..., paramN]);
super

The super keyword is used to call functions on an object's parent. It is useful with classes to call the parent constructor, for example. 
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);

*/
