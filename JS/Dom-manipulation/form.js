
//1.On click of button get values from elements.

//Best Practices [Name of function should indicate action(verb)]


function handleSubmit(){

    //1.Get FirstName element
    
    const txtbFname = document.getElementById("txtbFname");

    // 2.Get value of Element

    const fname = txtbFname.value;
    console.log(fname);

    //1.Get LastName element
    const txtbLname = document.getElementById("txtbLname");
   // 2.Get value of Element
    const lname = txtbLname.value;
    console.log(lname);

    //1.Get EMAIL element
    const txtbEmail = document.getElementById("txtbEmail");
   // 2.Get value of Element
    const Email = txtbEmail.value;
    console.log(Email);

    //1.Get PASSWORD element
    const txtbPassword  = document.getElementById("txtbPassword");
   // 2.Get value of Element
    const Password = txtbPassword.value;
    console.log(Password);

    //1.Get DOB element
    const inputDOB = document.getElementById("inputDOB");
   // 2.Get value of Element
   const DOB = inputDOB.value;
   console.log(DOB);

//    GET value by name

const genderButtons = document.getElementsByName("gender");
const isMale = genderButtons[0].checked;
const isFemale = genderButtons[1].checked;

console.log(isMale);
console.log(isFemale);

    
// label

const lblResult = document.getElementById("lblResult");
const result = `Name = ${fname} ${lname}, Email = ${Email}, Gender = ${isMale== true ? 'Male' : 'Female'}`;
console.log(result);
lblResult.style.display = "inline" ;
lblResult.innerText = result;
lblResult.style.backgroundColor = 'green';


}


function handleNameInput(){

    const fnameResult = document.getElementById("fnameResult");
    const nameinput = document.getElementById("txtbFname");

    fnameResult.innerText = nameinput.value;

}
