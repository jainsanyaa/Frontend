const data = [5];
const [x,y = 10] = data;
console.log(x);// output 5
console.log(y);// output 10
// default value in function parameter


class Person {
    consname, age, phonenumber) {
        this.name = name;
        this.age = age;
        this.phonenumber = phonenumber;
    }
}

let person = new Person("Sanyaa", 20, 8755271078);  

let { name : personName, age : personAge, phonenumber : personPhoneNumber } = person;
console.log.log(personName);
console.log(id);
console.log(personPhoneNumber);