// Functions are the most important part of JS

// what is a function?

// 1.GENERAL SYNTAX FUNCION

// function is a keyword
// add is a function name
// a,b = parameters

const funcAdd = function add(a, b){

    return a+b;
}

console.log(typeof funcAdd);
console.log(funcAdd(2, 3));


// 2.ARROW FUNCTION
//    return keyword is optional if parenthesis not required

const funcAddUsingArrow = (a, b) => {
    console.log("Adding...");
    return a+b;
}

// const funcAddUsingArrow = (a, b) => a+b;

console.log(typeof funcAddUsingArrow);
console.log(funcAddUsingArrow(2, 3));

