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

// ===============================
// 📌 DOM ELEMENTS (HTML se data lena)
// ===============================
let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
let container = document.querySelector("#container");


// ===============================
// 📌 MAIN OBJECT (PROJECT CONTROLLER)
// ===============================
const userManager = {

    // 📌 DATA STORE (users array)
    // 👉 yaha saare users objects ke form me store honge
    users: [],


    // ===========================
    // 📌 INIT FUNCTION (START POINT)
    // ===========================
    init: function () {

        // 👉 form submit event attach karna
        form.addEventListener("submit", this.submitform.bind(this));

        // 🔥 bind(this) important hai:
        // 👉 taaki this hamesha userManager ko point kare
    },


    // ===========================
    // 📌 FORM SUBMIT HANDLER
    // ===========================
    submitform: function (e) {

        // ❌ page reload stop karta hai
        e.preventDefault();

        // 👉 user add karna
        this.addUser();

        // 👉 UI update karna
        this.renderUi();
    },


    // ===========================
    // 📌 ADD USER (DATA STORE)
    // ===========================
    addUser: function () {

        // 👉 input values ko object bana ke array me store karna
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });

        // 👉 form clear kar dena
        form.reset();
    },


    // ===========================
    // 📌 RENDER UI (SCREEN PE SHOW KARNA)
    // ===========================
    renderUi: function () {

        // ❌ purana UI clear karna
        container.innerHTML = "";

        // 🔁 har user ke liye card banana
        this.users.forEach((user) => {

            // 📦 card create
            const card = document.createElement("div");
            card.className = "card";

            // 🖼️ image add
            const img = document.createElement("img");
            img.src = user.photo || "https://via.placeholder.com/100";
            card.appendChild(img);

            // 👤 name
            const name = document.createElement("h3");
            name.textContent = user.username;
            card.appendChild(name);

            // 💼 role
            const roleText = document.createElement("p");
            roleText.textContent = user.role;
            card.appendChild(roleText);

            // 📝 bio
            const desc = document.createElement("p");
            desc.textContent = user.bio;
            card.appendChild(desc);

            // 📌 card ko screen pe add karna
            container.appendChild(card);
        });
    }
};


// ===============================
// 📌 START PROJECT
// ===============================
userManager.init();