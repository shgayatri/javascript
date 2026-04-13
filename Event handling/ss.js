let inputs=document.querySelector("input");
let span=document.querySelector("span");
inputs.addEventListener("input",function(){
    span.textContent=inputs.value.length;
});