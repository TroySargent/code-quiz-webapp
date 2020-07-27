var quiz = [{
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "what",
            "answers": ["1", "2", "3", "4"],
            "correctIndex": 1
        }
    }

];

var question = document.querySelector(".question")
var answerBtns = document.querySelector(".answers")
var score = 0;
var i;
var currentQuestion = 0;

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

//adds event listener to each button in answer section
for (i=0; i < answerBtns.childElementCount; i++) {
    answerBtns.children[i].addEventListener("click", (event) => {
    console.log(event.target.id);
    currentQuestion++;
    });
};