endMessage = document.querySelector("#endMessage")

document.addEventListener("DOMContentLoaded", () => {
    endMessage.textContent = localStorage.score;
});

var userInput = document.querySelector("#userInitials");

document.querySelector("#submitScore").addEventListener("submit", (event) => {
    event.preventDefault();
    userInitials = userInput.nodeValue;
    localStorage.userInitials = userInitials
});