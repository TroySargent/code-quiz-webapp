var leaderList = document.querySelector("ul")
renderLeaderboard();

function renderLeaderboard() {  
    userList = JSON.parse(localStorage.userList);

    for (var i = 0; i < userList.length; i++) {
        var userLi = document.createElement("li");
        leaderList.appendChild(userLi);
        userLi.textContent = `Player: ${userList[i].userInitials}, Score: ${userList[i].userScore}`;
    };
};


//return home
document.querySelector("#goBack").addEventListener("click", () => {
    window.location.href = "./index.html";
});

//removes leaderboard data stored in local memory
document.querySelector("#clearLeaderboard").addEventListener("click", () => {
    localStorage.clear()
    renderLeaderboard();
});