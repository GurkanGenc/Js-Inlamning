// Creating UUID number
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
  class Person {
    constructor(firstname, lastname, email, phonenumber, address, city, postcode) {
        this.firstName = firstname
        this.lastName = lastname
        this.email = email
        this.phoneNumber = phonenumber
        this.address = address
        this.city = city
        this.postCode = postcode
    }

    get id() {
        return uuidv4() // It can be put in the Person class
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    // set fullName(value) {
    //     const values = value.split(' ')
    //     this.firstName = values[0]
    //     this.lastName = values[1]
    // }
}

const user = new Person(
    document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("email").value,
    document.getElementById("phoneNumber").value,
    document.getElementById("address").value,
    document.getElementById("city").value,
    document.getElementById("postCode").value
    )

// BUTTONS
// Gives the list after buttons
const displayUser = [];
document.getElementById("add_btn").addEventListener("click", () => {
    displayUser.push(uuidv4())
    for(let i = 0; i < document.getElementsByTagName('input').length; i++) {
        displayUser.push(document.getElementsByTagName('input')[i].value)
    }
    
    console.log(displayUser)
    // document.getElementById("display").innerText = displayUser
    // document.getElementById("panel").innerText = displayUser
    // CreateElements()
    resetForm()
})

// document.getElementById("change_btn").addEventListener("click", () => {
//     // document.getElementById("display").innerText = user.id
    
// })

// document.getElementById("delete_btn").addEventListener("click", () => {
//     displayUser.pop(document.getElementsByTagName("input").value)
//     console.log(displayUser)
//     document.getElementById("panel").innerText = ""
//     // document.getElementById("display").innerText = user.id
    
// })

// CREATE ELEMENTS
function CreateElements() {
    userDiv = document.createElement('div')
    flipDiv = document.createElement('div')
    panelDiv = document.createElement('div')
  
    // GER DEM CLASS & ID
    flipDiv.className = "flip"
    panelDiv.className = "panel"
    userDiv.id = `${user.id}`
    flipDiv.id = `${user.id}-flip`
    panelDiv.id = `${user.id}-panel`
  	
    flipDiv.innerText = `${user.firstname}` + ` ${user.lastname}`
  
  	// LÄGGER TILL I DOM:EN
    var currentDiv = document.getElementById('users');
    currentDiv.appendChild(userDiv)
    userDiv.appendChild(flipDiv)
    userDiv.appendChild(panelDiv)



    // display = document.createElement("div")
    // display.id = "display"
    // display.innerText = `${user.fullName}`
    
    // panel = document.createElement("div")
    // panel.id = "panel"    
    // panel.innerText = "Id: "
    // display.appendChild(panel)
    // panel.appendChild("p")
}

// Prevent submit the form
document.getElementById("regform").addEventListener("add_btn", (e) => {
    e.preventDefault()
})

//#region Validating TEXT
let texts = document.getElementsByClassName("text-input")

for (let input of texts) {
    input.addEventListener("keyup", (e) => {
        validateTextInputs(e)
    })
}
// Function for TEXT input validation
function validateTextInputs(e) {
    if(e.target.value.length < 3) {
        document.getElementById(`${e.target.id}-error`).innerText = "Enter more than 2 letters"
        document.getElementById("add_btn").disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ""
        document.getElementById("add_btn").disabled = false
    }
}
//#endregion

//#region  Validating EMAIL
document.getElementById("email").addEventListener("keyup", (e) => {
    validateMail(e)
})
// Function for EMAIL validation
function validateMail(e) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!e.target.value.match(mailformat)) {
        document.getElementById(`${e.target.id}-error`).innerText = "Enter a valid email address!"
        document.getElementById("add_btn").disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ""
        document.getElementById("add_btn").disabled = false
    }
}
//#endregion

//#region Validating PHONE
document.getElementById("phoneNumber").addEventListener("keyup", (e) => {
    validatePhone(e)
})
// Function for PHONE validation
function validatePhone(e) {
    var phone = /^\d{10}$/
    if(!e.target.value.match(phone)) {
        document.getElementById(`${e.target.id}-error`).innerText = "Enter the 10 digits format"
        document.getElementById("add_btn").disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ""
        document.getElementById("add_btn").disabled = false
    }
}
//#endregion

//#region Validating POST CODE
document.getElementById("postCode").addEventListener("keyup", (e) => {
    validatePostCode(e)
})
// Function for POST CODE validation
function validatePostCode(e) {
    if(e.target.value.length < 5 || e.target.value.length > 5) {
        document.getElementById(`${e.target.id}-error`).innerText = "Enter 5 digits"
        document.getElementById("add_btn").disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ""
        document.getElementById("add_btn").disabled = false
    }
}
//#endregion

// To reset the form fields
function resetForm() {
    document.getElementById('regform').reset()
}

// SUBMIT the form
// var at = document.getElementById("email").value.indexOf("@");
// var age = document.getElementById("age").value;
// var fname = document.getElementById("fname").value;
// submitOK = "true";

// if (fname.length > 10) {
//   alert("The name may have no more than 10 characters");
//   submitOK = "false";
// }

// if (isNaN(age) || age < 1 || age > 100) {
//   alert("The age must be a number between 1 and 100");
//   submitOK = "false";
// }

// if (at == -1) {
//   alert("Not a valid e-mail!");
//   submitOK = "false";
// }

// if (submitOK == "false") {
//   return false;
// }