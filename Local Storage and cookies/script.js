// local storage -> if we closed our browser data saved permanently 
// agar appke browser k ander  data store karna jo ki browser band hone pr bhi delete nhi hoyega 

// sessions storage -> ye aapka data temporary store krta h

// cookies-> ye bhi data store kata hai aapka data cookies naam ki property m save hota h and y cokkie concept kam data k liye hota h 

//localStorage
//store kaise kare-setItem
//data fetch kaise kare-getItem
//remove kaise kare-removeItem
//update kaise kare-

//localStorage m array vgera store nhi krte h isliye string bnate h //

// Apply theme
function applyTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
}

// Get system theme
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Initial theme
function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme || getSystemTheme());
}

setInitialTheme();

// Button toggle
document.getElementById("toggleBtn").addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});