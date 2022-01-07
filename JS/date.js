
var today = new Date();
console.log(today);


// Creating DATE

var date = new Date(2022, 00, 07, 14, 46, 58 ,02);
console.log(date);


// Display date
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());



// Get date

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
console.log(date.getDay());
console.log(days[date.getDay()]);

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());