

class Employee{

// constructor is called an object creation

    constructor(_name, _Id){

        this.name = _name;
        this.Id = _Id;

    }

        print(){ 

            // this keywords represents current object

            console.log(this);
            console.log(this.name+" "+this.Id);

        }   

        print2 = ()=>{

            console.log(this);
            console.log(this.name+" "+this.Id);

        }

}

var emp = new Employee("suraj", 1);
emp.print();
emp.print2();