// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue =100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId);

const bigNumber = 342443473686362n;



//Reference (Non primitive)

//Array, Objects, Funtions

const heros = ["shaktiman", "naagraj", "doga"]; //Arrays
// console.log(typeof heros);



let myObj = {           //objects
    name : "Nandlal",
    age : 22,
}


const myFunction = function () {
    console.log("Hello world");
}


console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof scoreValue);
console.log(typeof outsideTemp);
console.log(typeof anotherId);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);


// **************************************************
// Stack(Primitive), Heap(Non-Primitive)
let myYoutubename = "nandlalsakle";
let anothername = myYoutubename;
anothername="Babbusakle"
console.log(anothername);
console.log(myYoutubename);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email="nandlalsakle@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);



