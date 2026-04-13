let nm = document.querySelector("#name");
let en = document.querySelector("#email");
let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Name check
    if(nm.value.length <= 2) {
        document.querySelector("#hide").style.display = "block";
    } else {
        document.querySelector("#hide").style.display = "none";
    }

    // Email regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let ans = emailRegex.test(en.value);
    console.log(ans);

    if(!ans) {
        console.log("Invalid Email ❌");
    } else {
        console.log("Valid Email ✔");
    }
});