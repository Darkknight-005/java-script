// as inheritance in javascript somewhat lenghty and little complicated  
// it is eassy to uderstand 


// this is constructor method
class person{
    constructor(name,age,gender,interest){
        this.name = name;
        this.age =age;
        this.gender =gender;
        this.interest = interest;
    }
}   
// this the creation of new object 
let ram =new person('Ram',22,'male','roaming');

// this is constructor based on person or you can say inherit properties from person constructor 
class teacher extends person{
    constructor(name,age,gender,interest,subject,bio){
        super(name,age,gender,subject,bio); // Now 'this' is initialized by calling the parent constructor.
        this.subject = subject;
        this.bio = () => {
            console.log('\t\tTeacher\'s details\nName :- '+this.name+'\nAge :- '+this.age+'\nTeach subject :- '+this.subject)
        }
    }
}

/* note:
1. super()
 Unlike old-school constructor functions where the new operator does the initialization of this to a newly-allocated object, this isn't automatically initialized for a class defined by the extends keyword, i.e the sub-classes. 
 
 
2. extends 
The extends keyword can be used to subclass custom classes as well as built-in objects. 
 this keyword is use to help new constructor which is copy or prototype of basic constructor to add proeprties
 in our case:
 basic constructor is:  class person{}
 copy or prototype constructor: class teacher extends person{}


 
 */

