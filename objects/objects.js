// how to construct object in javascript

let person = {
  name: "jhon",
  age: 21,
  bio: function () {
    let result = `\t3. --> name is ${this.name} and age is ${this.age}`;
    console.log('\v'+result);
}
};

// this is the dot notation way to use objects properties

console.log("\t1. -->"+person.name);
console.log("\t2. -->"+person.age);
person.bio();

// sub-namespaces
 person = {
  name: {
    first_n:['jhon', 'ravi', 'rakesh'],
    last_n:['smith', 'kumar', 'modi']},
  age: 21,
  bio: function () {
    let result = `\t2. --> name is ${this.name.first_n[0]} and age is ${this.age}`;
    console.log(result);
  },
};
console.log("\t1. -->"+person.name.first_n[1]);
person.bio()

console.log('\vkya haal')