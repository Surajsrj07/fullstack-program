// Array Initialization

var cars = ["BMW", "Honda", "Mercedes","Mahindra","Audi"];
console.log(cars);
console.log(typeof cars);


// 1.Add a new item in an array

cars.push("Hyundai");
console.log(cars);


// 2.Add  new item using index

cars.splice(1,0,"Ferrari");
console.log(cars);


// 3.Removes Element from array
cars.pop();
console.log(cars);


// 4.Remove element using Index position

cars.splice(4,1);
console.log(cars);


// 5.Merge arrays

const moreCars= ["Tesla", "MG HECTOR"];
cars = cars.concat(moreCars);
console.log(cars);

// 6.Removes multiple items from array and create new array

const newCars =cars.splice(5,2);
console.log(newCars);
console.log(cars);

