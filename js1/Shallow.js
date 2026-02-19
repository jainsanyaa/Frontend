let obj1 = {
  name: "Sanya",
  address: {
    city: "Delhi"
  }
}
let obj2 = { ...obj1 }   // Shallow copy
obj2.address.city = "Noida"
console.log(obj1.address.city)  // (original bhi change ho gaya)
