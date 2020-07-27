endMessage = document.querySelector("#endMessage")

document.addEventListener("DOMContentLoaded", () => {
    endMessage.textContent = localStorage.score;
});

var userInitials = document.querySelector("#userInitials").value;

document.querySelector("#submitScore").addEventListener("submit", () => {
    userInitials 
});