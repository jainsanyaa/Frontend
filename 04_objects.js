// singleton object
// const tinderUser = new Object()

// non-singleton object
const tinderUser = {}

tinderUser.name = "sanya"
tinderUser.id = "1234"
tinderUser.isLoggedIn = false

console.log("Tinder User:", tinderUser)


// Nested Object Example
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sanya",
            lastname: "jain"
        }
    }
}

// Correct way to access nested object
console.log("First Name:", regularUser.fullname.userfullname.firstname)


// Object Merge Example
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// ❌ Wrong way (nested ho jata)
// const obj3 = {obj1, obj2}

// ✅ Correct way (safe merge)
const obj3 = Object.assign({}, obj1, obj2)

// ✅ Modern ES6 way (recommended)
// const obj3 = { ...obj1, ...obj2 }

console.log("Merged Object:", obj3)
