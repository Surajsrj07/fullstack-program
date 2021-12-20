// var num=10;
// let num2=20;

// num=30;
// num2=40;

// console.log(num);
// console.log(typeof num);

// console.log(num2);
// console.log(typeof num2);

// const name="Suraj"
// console.log(name);


var num = 10;
let num2 = 20;

// var -Function level scope
// let -Block level scope

function Myprint(){
    console.log("Inside Function===");

    console.log("var num" + num);
    console.log("let num2" + num2);
    var name ="Suraj"; //Function variables
    let name2 ="xyz";  //Function variables

    if(1==1){
        console.log("Inside Block===");

    var isNum =true;  //Function scope
    var isString = false;  //block scope
    console.log("var num" + num);
    console.log("let num2" + num2);
    console.log("var name" + num);
    console.log("let num2" + num2);
    console.log("var bool" + isNum);
    console.log("let bool" + isString);


    }

}

MyPrint();
