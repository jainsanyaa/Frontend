let emp = { id: 1,name : "sanya"}
let details ={...emp,role:"developer"}
let info = {...emp}
info.name = "pari"// shallow copy
console.log(details)
console.log(info)
