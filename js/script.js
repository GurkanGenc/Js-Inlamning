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
    set fullName(value) {
        const values = value.split(' ')
        this.firstName = values[0]
        this.lastName = values[1]
    }
}

const user = new Person(
    document.getElementById("firstName").value,
    document.getElementById("lastName").value,
    document.getElementById("email").value,
    document.getElementById("phoneNumber").value,
    document.getElementById("address").value,
    document.getElementById("city").value,
    document.getElementById("postCode").value
    );

const savedUser = [];

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
        document.getElementById("save_btn").disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ""
        document.getElementById("save_btn").disabled = false
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
        document.getElementById("save_btn").disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ""
        document.getElementById("save_btn").disabled = false
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
        document.getElementById("save_btn").disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ""
        document.getElementById("save_btn").disabled = false
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
        document.getElementById("save_btn").disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ""
        document.getElementById("save_btn").disabled = false
    }
}
//#endregion

// To reset the form fields
function resetForm() {
    document.getElementById('regform').reset()
}

// BUTTONS
// Gives the list after buttons
document.getElementById("save_btn").addEventListener("click", () => {
    
    
    for(let i = 0; i < entries.length; i++) {
        savedUser.push(document.getElementsByTagName("input")[i].value)
    
    }

    // user = new User(`${firstName.value}`, `${lastName.value}`)
    // savedUser.push(user.id, user.firstName, user.lastName)
    // savedUser.push(user.lastName)
    console.log(savedUser)
    document.getElementById("panel").innerText = savedUser    
})

document.getElementById("change_btn").addEventListener("click", () => {
    // document.getElementById("registeredUser").innerText = user.id
    
})

document.getElementById("delete_btn").addEventListener("click", () => {
    savedUser.pop(document.getElementsByTagName("input").value)
    console.log(savedUser)
    document.getElementById("panel").innerText = ""
    // document.getElementById("registeredUser").innerText = user.id
    
})


document.getElementById("regform").addEventListener("save_btn", (e) => {
    e.preventDefault()

    for (let entry of e.target.elements) {
        console.log(entry.target.value)
    }
})