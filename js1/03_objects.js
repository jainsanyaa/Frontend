// singleton
// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "sanya",
    age: 18,
    location: "agra",
    [mySym]: "myKey1",   // comma lagana zaroori
    email: "jainsanya@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// normal access
console.log(JsUser.email);

// bracket notation
console.log(JsUser["email"]);

// symbol access (important)
console.log(JsUser[mySym]);
