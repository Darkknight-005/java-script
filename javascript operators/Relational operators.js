/*
A relational operator compares its operands and returns boolean value based on whether the comparison is true.
*/
/*
the `in` operator return true if specified property in in the object.
the syntax:
propertyName or index in onject/array 
*/

// array condition require index of array 
let Number = ["hello",9,2,"kya", "hall",3,4];
console.log( 1 in Number);
console.log(Number[1]);

// object condtion this require property name inside obejct
let objec_t = {name:"jhon" , last_name:"smith", age:45}
console.log('name' in objec_t)  // 'name' is property name and "jhon" is property value 
console.log(objec_t['name']);

/* 
the `instanceof` operator returns true if the specified object is of the specified object type 
the syntax:
objectName instanceof objectType*/
function go(){}
let y = go;
let x = new go(45)
console.log(x instanceof go)
console.log(typeof(x))
console.log(Number instanceof Array)


/* basically instanceof use for only object and array */