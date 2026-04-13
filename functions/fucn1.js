function Mohit(text){
   console.log(`Mohit ${text}`);
}

Mohit("bhagoda hhh");
Mohit("hurt krta h");
Mohit("pdhta nhi h");
Mohit("juth bolta h");
Mohit("dokha de rha h");



function sum(a,b){
    return a+b;
}
console.log(sum(5, 10));

// default parameter
function sum(a=0,b=0){
    return a+b;
}
console.log(sum(5, 10));


function abcd(...val){
    console.log(val);
}
abcd(1,2,3,4,5);

// rest parameter
function sum(...numbers){
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total += numbers[i];
    }
    return total;
}
console.log(sum(1,2,3,4,5));
// return parameter jhn se aaye ho wahi daal denge
function abcd(){
    return 12;
}
console.log(abcd());

// high order functions= functions that return another function or take another function as an argument
function abcd(){
    return function(){
        console.log("Gayatri");
    };
}
abcd()();


// closures -> ek function jo return kare ek aur function return hone 
//wala  function hmesha use krega parent function k variable ko //
function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
}

// lexial scope->scope jhn se function ko call kr rhe ho wahi se variable ko access kr skte ho

function abcd(){
    let a=12;
    function defg(){
        let b=10;
    
    function hijk(){
        let c=5;
    }
}
}

(function(){
    console.log("IIFE");
})();