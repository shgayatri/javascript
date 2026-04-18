// sope - functional scope,global scope and block scope
// function scope-function k ander use ho skti h
// globa scope-poore code m khin bhi use ho skti h
// block scope-{}curky braces like if else loop etc k ander use ho skti h
// agar apka code kisi bhi {} ke ander nhi h to apka code global h 


// execution context-js sabse pahle jaise hi aapka function dekhta h sabse pahle js banaata h excecution context,ye ek process hai jo ki do different phases mein chlta hai ,memeory phase jisme varaibles ko space allocate hoti h or dusra excecution phase jisme code ko execute kiya jaata h 
  // y ek hypothetical stack hai jisme aapka code execute hota h


  // lexical scoping ->ki aap kaha par physically available ho ye porri tareeke se depend krta  h ki aap kya access kar paoge 
  //function abcd(){
 // let a=10;
 // function defg(){
 //     console.log(a);
 // }
 // defg();
   // }
 //sme a physcally abd k ander available h too dfgh vala function bhi a ko acess kr payega


 // closure-> closures hote h functions jo kisi parent function ke ander ho aur andar waala function return ho rha ho,and returning function use kare,parent function ka koi variable
// function abcd(){
// let a=12;
// return function(){
// console.log(a);
//};
//}
//let fun = abcd();
//fun();//12 

// y sach h function ke khtm hone pe aapka fnc and uske variables khtm hojate h , par jab bhi closure bnta h to apka func aur uske varaibles ka ek backlink bnaya jaata h aur uska naan hota h [[environment]]


function createToaster(config) {
  return function (str) {

    let div = document.createElement("div");
    div.textContent = str;

    div.className = `inline-block ${
      config.theme === "dark"
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-black"
    } px-6 py-3 rounded shadow-lg pointer-events-none`;

    document.querySelector(".parent").appendChild(div);

    if (config.positionX != "left" || config.positionY != "top") {
      document.querySelector(".parent").className +=
        `${config.positionX === "right" ? " right-5" : " left-5"}
         ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }

    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);

  };
}

// usage
let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "light",
  duration: 3,
});

toaster("Download Done");

setTimeout(() => {
  toaster("Harsh accepted your request");
}, 2000);