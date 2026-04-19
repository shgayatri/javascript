// this keyword
// global-> this keyword global object ko point krta h, browser mein global object window hota h, node mein global hota h
// function->window ke andar jab aap function ke andar this ka use krte h to this keyword window ko point krta h
// method with es5 fnc-> jab aap kisi object ke andar function define krte h to uss function ke andar this keyword uss object ko point krta h
// method with es6 arrow fnc-> window
//es5 function inside es5 method->window
// arrow function inside es5 method->object
// event handler->element
// class-> blank object


// call apply bind
// function ko call karte waqt aap set kr skte ho ki uski this ki value kya hogi 
// let obj-{
// name:"gayatri,
// age:21,
//};
// function abcd(){
// console.log(this.name);
//}
// abcd.call(obj);

let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let container = document.querySelector("#container");

const userManager = {
    users: [],

    init: function () {
        form.addEventListener("submit", this.submitform.bind(this));
    },

    submitform: function (e) {
        e.preventDefault();
        this.addUser();
        this.renderUi();
    },

    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });

        form.reset();
    },

    renderUi: function () {

        container.innerHTML = ""; // only clear cards

        this.users.forEach((user) => {

            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.src = user.photo || "https://via.placeholder.com/100";
            card.appendChild(img);

            const name = document.createElement("h3");
            name.textContent = user.username;
            card.appendChild(name);

            const roleText = document.createElement("p");
            roleText.textContent = user.role;
            card.appendChild(roleText);

            const desc = document.createElement("p");
            desc.textContent = user.bio;
            card.appendChild(desc);

            container.appendChild(card);
        });
    }
};

userManager.init();