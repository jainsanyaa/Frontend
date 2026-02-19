//array 
//shallow copy
//whose properties  share the same refrencce(point to the same underfying value )
//deep copy
//whose properties do not share the same  refrence(point the differencent  underfying  value )
const myArr =[1,2,3,4,5]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]);
// array methods
//yArr.push(6)
//yArr.pop(7)
 //console.log(myArr);
 //myArr.unshift(9)
 // myArr.shift()

// ture or false mai ans milega 
// console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));

//const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
