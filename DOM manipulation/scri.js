let h1=document.querySelector("h1");
h1.textContent="Or Gayatri Kya Haal Hai";
h1.innerHTML="<i>Or Gayatri Kya Haal Hai</i>";

let a=document.querySelector("a");
a.removeAttribute("href");
a.href="https://www.google.com";
a.setAttribute("href","https://www.google.com");


let img=document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1773929484011-13d062a73b24?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8");

// create an element 
// append the element to the DOM
let p=document.createElement("p");
p.textContent="This is a new paragraph";
//document.body.appendChild(p);//
document.querySelector("body").append(p);
