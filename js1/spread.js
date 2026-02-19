let arr1 = [1,2 {name:"sanya"}];
let arr2 =[...arr1];
console.log(arr2);
arr2[1]=10;
console.log(arr1);
console.log(arr2);

arr2[2].name = "shanu";
console.log(arr1);
console.log(arr2);

// is  its primitive value it will bo copied by value but if its object it will be copied by reference