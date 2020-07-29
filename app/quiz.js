var quiz = [{
        "question": {
            "text": "What is the difference between == and === in JavaScript?",
            "answers": ["There is no difference.", "JavaScript only uses = .", "== performs type coercion and === checks strict equality", "=== compares numbers and == compares strings."],
            "correctIndex": 2
        }
    },
    {
        "question": {
            "text": "What method can be used to convert strings into JSON?",
            "answers": ["JSON.parse()", "JSON.stringify()", ".toString()", ".split()"],
            "correctIndex": 0
        }
    },
    {
        "question": {
            "text": "Which variables are block scopes elements?",
            "answers": ["const only", "let and const", "let only", "var only"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "Which CSS property can be changed to relative, absolute, or fixed?",
            "answers": ["height", "margin", "line height", "position"],
            "correctIndex": 3
        }
    },
    {
        "question": {
            "text": "What is neccessary to include JavaScript in an HTML file?",
            "answers": ["link tag", "reference tag", "source tag", "script tag"],
            "correctIndex": 3
        }
    },
    {
        "question": {
            "text": "How do you end a line in JavaScript?",
            "answers": [";", ",", ".", "|"],
            "correctIndex": 0
        }
    },
    {
        "question": {
            "text": "What parameter is required to find out information about clicks, keydowns, etc.?",
            "answers": ["watch", "event", "listen", "info"],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "How can you convert a string into an array?",
            "answers": [".split('')", ".toArray()", "Array.convert()", "not possible"],
            "correctIndex": 0
        }
    },
    {
        "question": {
            "text": "What is JQuery?",
            "answers": ["It is a cool new language.", "It standardized syntax for interacting with Web APIs across browsers.", "It lets you do machine learning.", "It is a nickname for JavaScript."],
            "correctIndex": 1
        }
    },
    {
        "question": {
            "text": "Which is a template string?",
            "answers": ["`{variable}`", "'variable'", "_variable_", "~variable~"],
            "correctIndex": 0
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

