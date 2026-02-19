function calculateCartPrice(...num1) {
    // rest operator
    return num1
}

console.log(calculateCartPrice(100, 200, 500))


const user = {
    username: "sanya",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// direct object pass
handleObject({
    username: "shanu",   // ✅ single colon
    price: 299
})


// Array example
const myNewArray = [1, 2, 4, 5]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
