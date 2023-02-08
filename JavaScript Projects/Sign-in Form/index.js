const container = document.querySelector(".form-cont");
const sign_in = document.querySelector(".signinbtn");
const sign_up = document.querySelector(".signupbtn");
const body = document.querySelector("body")

sign_up.addEventListener("click", ()  =>{
    container.classList.add("active");
    body.classList.add("active");
});

sign_in.addEventListener("click", ()  =>{
    container.classList.remove("active");
    body.classList.remove("active");
});


