var quiz = [{
        "question": {
            "text": "1",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "2",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "3",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "4",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "5",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "6",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "7",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "8",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "9",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "10",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    }

];

var question = document.querySelector(".question");
var answerBtns = document.querySelector(".answers");
var score = 0;
var i;
var currentQuestion = 0;
var notification = document.createElement("p");

function displayQuestion() {
    question.textContent = quiz[currentQuestion].question.text;
    for (i=0; i < quiz[currentQuestion].question.answers.length;  i++) {
        answerBtns.children[i].textContent = quiz[currentQuestion].question.answers[i];
    };
};

var timer = document.querySelector(".timer");
var quizTime = 100;
timer.textContent = quizTime;

//start quiz timer for 100 seconds
document.addEventListener("DOMContentLoaded", () => {
    displayQuestion()
    setInterval(() => {
        quizTime--;
        timer.textContent = quizTime;
    if (quizTime == 0) {
        localStorage.score = score;
        window.location.href = "./endgame.html";
    }
    }, 1000)
});


answerBtns.addEventListener("click", function(event) {
    //verify that button is pressed and not area around it
    const isButton = event.target.nodeName === 'BUTTON'; 
    if (!isButton) {
        return;
    };
    //if correct add to score
    if (event.target.id == quiz[currentQuestion].question.correctIndex) {
        score += 5;
        answerBtns.append(notification);
        notification.innerHTML = `<hr> Correct! Score: ${score}`;
        console.log(`score: ${score}`);
    };
    //if wrong take away ten seconds on quiz
    if (event.target.id != quiz[currentQuestion].question.correctIndex) {
        quizTime -= 10;
        answerBtns.append(notification);
        notification.innerHTML = `<hr> Wrong! 10 seconds deducted!`;
    };
    //increment to next question
    currentQuestion++;
    
    //wait to clear correct/wrong notification and next question for 1 second
    setTimeout(function() { 
        //if end of quiz, end game
        if (currentQuestion == quiz.length || quizTime <= 0) {
            localStorage.score = score;
            window.location.href = "./endgame.html";
        }
        //displays next question
        displayQuestion();
        notification.innerHTML = "";
    }, 1000);
});

