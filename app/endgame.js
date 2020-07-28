endMessage = document.querySelector("#endMessage")

document.addEventListener("DOMContentLoaded", () => {
    endMessage.textContent = localStorage.score;
});

var userList = JSON.parse(localStorage.getItem("userList"));

if (userList == null) {
    userList = [];
};

var userInput = document.querySelector("#userInitials");

document.querySelector("#submitScore").addEventListener("submit", (event) => {
    event.preventDefault();

    userInitials = userInput.value; //form value
    userScore = localStorage.score;

    userList.push({userInitials,userScore});
    localStorage.setItem("userList", JSON.stringify(userList));

    window.location.href = "./highscores.html";
});