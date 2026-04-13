
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    alert("Button clicked!");
});
let input=document.querySelector("input");
input.addEventListener("input",function(dets){
    if(dets.data!==null){// input aaye too function chlega 
        console.log(dets.data);
    }
}); 

document.querySelector("select").addEventListener("change",function(dets){
    console.log(dets.target.value);
});

let h3 = document.querySelector("#device-selection");
let select = document.querySelector("select");

select.addEventListener("change", function(dets){
    h3.textContent = "Device Selected: " + dets.target.value;
});