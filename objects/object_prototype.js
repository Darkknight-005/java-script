// important note: first copy section one and paste in browser console then section two and then section three don't mix .
// paste section by section.


/* ***************** section one ********** */
// this is cunstructor function 
function fraud(name,c_lass,section,gender){
    this.name = name;
    this.c_lass = c_lass;
    this.section = section;
    this.gender = gender;
    this.bio = function(){
        console.log('Name :-'+this.name+'\nClass :-'+this.c_lass+'\nSection :-'+this.section+'\nGender :-'+this.gender)
    }
};
let jhon = new fraud("Jhon",2,'b','male');

let ravi = new jhon.constructor('ravi',3,'c','male');

/* ***************** section two ********** */

// this is the way we can modfiying prototype means adding property to constructor function
// and modifier automatically included in instances or object created by constructor function


fraud.prototype.greeting = function(){console.log('Hello '+this.name+'\nWelcome in your new class '+this.c_lass)}

/* ***************** section three ********** */
jhon.greeting()
console.log('\n')
ravi.greeting()