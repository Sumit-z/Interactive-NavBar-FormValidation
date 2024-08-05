// Day-Night Mode
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let modeToggle = document.querySelector(".darkmode");

    modeToggle.addEventListener("click" , () =>{
               modeToggle.classList.toggle("active");
               body.classList.toggle("dark");
    })

// Form-Validation
let nameError = document.querySelector(`#name-error`);
let phoneError = document.querySelector(`#phone-error`);
let emailError = document.querySelector(`#email-error`);
let messageError = document.querySelector(`#message-error`);
let submitError = document.querySelector(`#submit-error`);

const validateName = () =>{
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML = "Write Full name properly";
        return false;
    }
    nameError.innerHTML  = `<i class='bx bx-check'></i>`;
    return true;
}
const validatePhone = () =>{
    let phoneNo = document.getElementById("contact-phone").value;

    if(phoneNo.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if(phoneNo.length !==10){
        phoneError.innerHTML = "Must be 10 digits";
        return false;
    }
    if(!phoneNo.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone number must be only digit";
        return false
    }
    phoneError.innerHTML  = `<i class='bx bx-check'></i>`;
    return true;
}
const validateEmail = () => {
    let Email = document.getElementById("contact-email").value;

    if(Email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML = "Wrong email format";
        return false;
    }
    emailError.innerHTML  = `<i class='bx bx-check'></i>`;
    return true;
}
const validateMessage = () => {
    let Message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - Message.length;
    
    if(Message.length == 0){
        messageError.innerHTML = "Message is required";
        return false;
    }
    if(left > 0){
        messageError.innerHTML = left + "more character required";
        return false;
    }
    messageError.innerHTML = `<i class='bx bx-check'></i>`;
    return true;
}
const validateForm = () => {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the error";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
}