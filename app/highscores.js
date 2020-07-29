var leaderList = document.querySelector("ul")
renderLeaderboard();

function renderLeaderboard() {  
    leaderList.innerHTML = "";
    var userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
        userList.sort(function (a, b) {
            return b.userScore - a.userScore;
            });
    };// orders leaderboard greatest to least

    if (userList == null) {
        userList = [];
    };      

    //adds each user in memory to leaderboard
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