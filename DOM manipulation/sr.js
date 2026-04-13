let h1 = document.querySelector("h1");
h1.classList.add("hu");

let body = document.querySelector("body");
body.classList.add("body");

let a=document.querySelector("#heading");
a.textContent = "New heading text";

let lis=document.querySelectorAll('li');
lis.forEach(function(val){
    console.log(val.textContent);
});

let btn=document.querySelector("button");
btn.removeAttribute("disabled");