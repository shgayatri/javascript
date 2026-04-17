function createNote() {
  let img = document.getElementById("img").value;
  let name = document.getElementById("name").value;
  let town = document.getElementById("town").value;
  let purpose = document.getElementById("purpose").value;
  let error = document.getElementById("error");

  let category = document.querySelector('input[name="cat"]:checked');

  // DEFAULT IMAGE
  if (img === "") {
    img = "https://images.unsplash.com/photo-1776377231754-d36928e6ee4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8";
  }

  // VALIDATION
  if (name === "" || town === "" || purpose === "") {
    error.innerText = "All fields are required!";
    return;
  }

  if (!category) {
    error.innerText = "Please select a category!";
    return;
  }

  error.innerText = "";

  let note = {
    img,
    name,
    town,
    purpose,
    category: category.value
  };

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.push(note);

  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();

  // CLEAR FORM
  document.getElementById("img").value = "";
  document.getElementById("name").value = "";
  document.getElementById("town").value = "";
  document.getElementById("purpose").value = "";
  category.checked = false;
}

function displayNotes() {
  let notesDiv = document.getElementById("notes");
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notesDiv.innerHTML = "";

  notes.forEach((n, index) => {
    notesDiv.innerHTML += `
      <div class="note">
        <img src="${n.img}" width="80" style="border-radius:10px;"><br>
        <b>${n.name}</b><br>
        ${n.town}<br>
        ${n.purpose}<br>
        <small>${n.category}</small><br><br>
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();
}

// PAGE LOAD PE SHOW
window.onload = displayNotes;