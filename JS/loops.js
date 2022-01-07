function printOddTill100(){

    var i=1;                     //Assignment
    while(i<=100){               //Evaluation
        if(i%2!=0){
            console.log(i);
        }
        i++;                     //Increment/Decrement
    }
}

printOddTill100();

function printEvenTill100(){

    for(let i=1 ; i<=100 ; i++){
        if(i%2==0){
            console.log(i);
        }
        i++;
    }
}

printEvenTill100();
