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
        return uuidv4()
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    get fullAddress() {
        return `${this.address} ${this.city} ${this.postCode}`
    }
}

const displayUser = [];
let user;

// BUTTONS
document.getElementById("add_btn").addEventListener("click", () => {
    user = new Person(
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("email").value,
        document.getElementById("phoneNumber").value,
        document.getElementById("address").value,
        document.getElementById("city").value,
        document.getElementById("postCode").value
        )
    displayUser.push(user)
    
    // console.log(user)
    CreateElements()
    // resetForm()
})

// document.getElementById("edit_btn").addEventListener("click", () => {
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
    // Main div that wrap the display and the panel divs 
    var toggleDiv = document.createElement("div")
    // Unique id is needed to see every panel under a different display div
                // toggleDiv.id = `${user.id}`
    // Display div that contains first and fast name
    var display = document.createElement("div")
    display.id = "display"
    display.className = "display-name"
    display.innerText = user.fullName
    // Append the sub-divs to the super-div
    document.getElementById("displayUser").appendChild(toggleDiv)
    toggleDiv.appendChild(display)
    // Panel that holds the user info
    var panel = document.createElement("div")
    panel.className = "panel"
    // Append the panel to the main div
    toggleDiv.appendChild(panel)

    // Filling the panel
    var idLine = document.createElement("p")
    // idLine.innerHTML = `Id: ${user.id}`
    idLine.innerHTML = "Id: ".bold() + user.id

    var mailLine = document.createElement("p")
    mailLine.innerHTML = "E-post: ".bold() + user.email

    var phoneLine = document.createElement("p")
    phoneLine.innerHTML = "Phone: ".bold() + user.phoneNumber

    var addressLine = document.createElement("p")
    addressLine.innerHTML = "Address: ".bold() + user.fullAddress
    
    // Those classes -even Bootstrap- work!
    idLine.className = "lines"
    mailLine.className = "lines"
    phoneLine.className = "lines"
    addressLine.className = "lines"

    panel.appendChild(idLine)
    panel.appendChild(mailLine)
    panel.appendChild(phoneLine)
    panel.appendChild(addressLine)
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
        // ValidateForm()
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

// Form validation
// function ValidateForm() {
//     var isFormValid = true;
//     if (user.firstName == "" && user.lastName == "" && user.email == "" && user.phoneNumber == "" && user.address == "" && user.city == "" && user.postCode == "") {
//         // document.getElementById(`${e.target.id}-error`).innerText = "Enter more than 2 letters"
//         isFormValid = false
//         document.getElementById("add_btn").disabled = true
//     }
//     else {
//         isFormValid = true
//         document.getElementById("add_btn").disabled = false
//     }
        
// }

// document.getElementById('add-btn').addEventListener('submit', function() {
//     if (user.firstName == "" && user.lastName == "" && user.email == "" && user.phoneNumber == "" && user.address == "" && user.city == "" && user.postCode == "") {
//         // document.getElementById(`${e.target.id}-error`).innerText = "Enter more than 2 letters"
//         document.getElementById("add_btn").disabled = true
//     }
//     else
//         document.getElementById("add_btn").disabled = false
// })

// document.getElementById('regform').addEventListener('submit', (e) => {
//     // e.preventDefault()

//     let errors = []

//     for (let element of e.target.elements) {
//         switch(element.tagName) {
//             case 'INPUT': 
//                 errors.push(validateInput(element))
//                 break;
//             case 'SELECT': 
//                 errors.push(validateSelect(element))
//                 break;
//         }
//     }

//     if(!errors.includes(true))
//         window.location.replace("success.php");
// })

// function validateInput(element) {

//     if(element.required) {
//         if(element.value == "")  {
//             console.log('fältet uppfyller inte kravet på 2 tecken')
//             return true
//         }
//     }

//     return false
// }

// const validateSelect = (element) => {
//     if(element.required) {
//         if(element.value === '') {
//             console.log('Du måste ange en stad')
//             return true
//         }  
//     }

//     return false
// }

function validateForm() {
    // Retrieving the values of form elements 
    // var name = document.getElementById("firstName").value;
    // var email = document.contactForm.email.value;
    // var mobile = document.contactForm.mobile.value;
    // var country = document.contactForm.country.value;
    // var gender = document.contactForm.gender.value;
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    
    // Validate name - It works
    // if (document.getElementById("firstName").value == "" || document.getElementById("lastName").value == "" || document.getElementById("email").value == "" || document.getElementById("phoneNumber").value == "" || document.getElementById("address").value == "" || document.getElementById("city").value == "" || document.getElementById("postCode").value == "") {
    //     document.getElementById("add_btn").disabled = true
    // } else {
    //     document.getElementById("add_btn").disabled = false
    // }
}