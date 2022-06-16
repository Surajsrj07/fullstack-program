// Find() method returns the first element from the array that satisfies the provided testing function. Otherwise undefined is returned.
// Let’s take an example of find() to find users with age less than 30 from a collection of users.

const users = [
    {
        id:1,
        name:"john",
        age:30,
    },
    {
        id:2,
        name:"john",
        age:31,
    },
    {
        id:3,
        name:"john",
        age:27,
    },
    {
        id:4,
        name:"john",
        age:28,
    },
    
];


//find() 

const userList = users.find((users)=>users.age<30);

console.log(userList);



// Filter() method creates a new array with all elements that has passed the provided test condition.
// Let’s take the same example to filters users with age less than 30.

//filter()

const ageList = users.filter((users)=>users.age<30);

console.log(ageList);



