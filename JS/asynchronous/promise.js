// Promise -Async library
//resolve - success of promise (async task)
//reject - errors ,issues in async tasks


function add(a, b){
    const promise = new Promise((resolve, reject)=>{
        if(a<0){
            reject("Invalid Value");
        }else{
            setTimeout(() => {
                resolve(a+b);
            }, 2000);    

        }
      
    });
    return promise;
}

function print(res){
    console.log(res);
}


const result = add(2, 3);
//then function will execute after promise is executed
//catch is called when promise is rejected
//finally is called in both cases
result.then((res)=>{
print(res);
});


const resultwith0 = add(-1, 2);
resultwith0
  .then((res)=>{print(res);})
  .catch((reason)=>{console.log(reason);})
  .finally(()=>{console.log("Promise is completed");});

