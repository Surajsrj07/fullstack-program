
// This is not an Array

var cars = "Tesla, Audi, BMW, Suzuki";

console.log(cars[0]);

//Sub-string

// const result = cars.substring(0,5);  //it represents 2 parameters -(from start , count)
// console.log(result);


// Sub-Str

const result = cars.substr(7,4);  //it represents 2 parameters -(from start , end)
console.log(result);

// Length of the string (including space)

console.log(cars.length);

// Replace String

const modifiedcars = cars.replace("Audi" ,"Tata");
console.log(modifiedcars);

//uppercase and lowercase

console.log(cars.toLowerCase());

console.log(cars.toUpperCase());

// Split and Join

const carsArray = cars.split(',');
console.log(carsArray[0]);

const StringFromArray = carsArray.join("|");
console.log(StringFromArray);


// concat

const anotherCars = ", KIA, MG, Honda";
const concatedCars = cars.concat(anotherCars);
console.log(concatedCars);