
//1.On click of button get values from elements.

//Best Practices [Name of function should indicate action(verb)]


function handleSubmit(){

    //1.Get FirstName element
    
    const txtbFname = document.getElementById("txtbFname");

    // 2.Get value of Element

    const fname = txtbFname.value;
    console.log(fname);

    //1.Get LastName element

    // 2.Get value of Element
    const txtbLname = document.getElementById("txtbLname");
        // 2.Get value of Element

    const txtbLname = document.getElementById("txtbLname");

    const lname = txtbLname.value;
    console.log(lname);


}