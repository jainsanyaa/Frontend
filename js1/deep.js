let obj1 = {
  name: "Sanya",
  address: {
    city: "Delhi"
  }
}
let obj2 = JSON.parse(JSON.stringify(obj1))  // Deep copy
obj2.address.city = "Noida" 
console.log(obj1.address.city)  // (original safe hai)
