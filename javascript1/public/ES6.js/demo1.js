/*/let person = {
    name : "sanya",
    age: 20,
    isEmployed: true,
};

// create a duplicate objet
let person2 = person;

// modify the dupliacte object
person2.age = 31;

// check the original object
console.log(person.age);// output: 31;
console.log(person2.age);// ouput: 31

// create a similar object using a function constructor
function Person(name,age,isEmployed) {
    this.name = name;
    this.age = age;
    this.isEmployed = isEmployed;
}
    /*/
    // two version of this  1.Dyanamic behavior or Lexical this behavior

   // function testFunction(){
     //   console.log("Inside testFunction,this refer to:");
       // console.log(this);

let person = {
    name : "sanya",
    age: 20,
    isEmployed: true,
    greet: function() {
        console.log("Hello, my name is" + this.name);
        console.log(this);
        let innerGreat = function() {
            console.log("sanya " + this.name);
        }  
    }
};

