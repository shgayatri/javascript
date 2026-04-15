let count = 0;

let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");
let heading = document.querySelector("h2");

let intv = setInterval(function () {

    if (count <= 100) {
        progress.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
        count++;
    } else {
        heading.textContent = "Downloaded ✔";
        clearInterval(intv);
    }

}, 50);