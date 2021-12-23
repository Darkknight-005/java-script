// // oop stands for object oriented programming

// this below code is constructer function;
function friends(name,age,birthDay){
  this.name = name;
  this.age = age;
  this.birthday = birthDay;
  this.f_info = () => {
  console.log("Friend Name: "+name+"\nAge: "+age+"\nBirthday: "+birthDay);
  }
}
let ravi = new friends("Ravi",22,`21 becember`);
ravi.f_info();

// this below code is some advace constructer function for now
function Person(first, last, age, gender, interests) {
    this.name = {
       first : first,
       last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      console.log("\v1. -->"+this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.\v');
    };
    this.greeting = function() {
      console.log('\n -->2. Hi! I\'m ' + this.name.first + '.');
    };
  }
  let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
  console.log(person1['age']);
  console.log(person1.interests[1]);
 person1.bio();

//  this is object constructer given below

let person2 = new Object();
person2.name = 'rakesh';
person2.age = 32;
person2.gender = 'male';
person2.bio = function(){
  console.log('\nname: '+ this.name +'\nage: '+this.age+'\ngender: '+this.gender)
};
person2.bio();

let person3 = object.create(person2);
person3.name = 'mk gandhi';
person3.age = 50;
person3.gender = 'male';

person3.bio()