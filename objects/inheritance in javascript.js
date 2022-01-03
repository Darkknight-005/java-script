// how inheritance works in javascript

// constructor function
function common(name,age,gender,interest){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
};
// this prototype is added to common constructor 
common.prototype.bio = function (){
  console.log(`\t\tPerson common detail's \nName :- ${this.name}\nAge :- ${this.age}\nGender :- ${this.gender}\nInterest :- ${this.interest}`)
};

// this prototype is added to common constructor 
common.prototype.greeting = function (){
  const greeting = `Hello ${this.name}\nWelcome to our site.!`;
  console.log(`\t${greeting}`)
};

// this is new (programmer) constructor which have common properties inheriting from "common" constructor
function programmer(name,age,gender,interest,language){
  common.call(this, name,age,gender,interest);
  this.language = language;
};

// this code add inheritance of prototypes which are added to common constructor to programmer constructor
// if you don't add this line, the protoytpes added to common constructor will not added to programmer constructor 
programmer.prototype = Object.create(common.prototype);
// this will set programmer as constructor  
programmer.prototype.constructor = programmer;
let modi = new common('Narendra Damodardas Modi',71,'Male','Economy');
let mukesh = new programmer('Mukesh',20,'Male','Web series','python');
let ruhi = Object.create(mukesh);