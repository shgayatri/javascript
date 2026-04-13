let email = document.querySelector("#email");
let password = document.querySelector("#password");

let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    // EMAIL
    if(!emailans){
        document.querySelector("#emailError").style.display = "block";
        document.querySelector("#emailError").textContent = "Email is incorrect";
    } else {
        document.querySelector("#emailError").style.display = "none";
    }

    // PASSWORD
    if(!passwordans){
        document.querySelector("#passwordError").style.display = "block";
        document.querySelector("#passwordError").textContent = "Password is incorrect";
    } else {
        document.querySelector("#passwordError").style.display = "none";
    }
});