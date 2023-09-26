let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString);
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023,1,23);
// let myCreateDate = new Date(2023,0,23,5,3);
let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getTimezoneOffset());


console.log(newDate.toLocaleString('default',{ weekday: "long"}));