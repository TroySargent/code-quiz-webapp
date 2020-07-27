//return home
document.querySelector("#goBack").addEventListener("click", () => {
    window.location.href = "./index.html";
});

//removes leaderboard data stored in local memory
document.querySelector("#clearLeaderboard").addEventListener("click", () => {
    localStorage.clear()
});