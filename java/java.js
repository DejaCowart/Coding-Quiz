var myQuestions = [
    {
            id:0,
            question: "Commonly used Data Types do not include",
            option:["Strings","Booleans","Alerts","Numbers"],
            answer:""
    },
    {
        id:2,
        question: "A very useful tool used during development and debugging for printing contentto the debugger is:",
        option:["JavaScript","Terminal/Bash","For Loops","Console.log"],
        answer:"Console.log"
    },
    {
        id:3,
        question: "String values must be enclosed within ___ when being assigned to variables.",
        option:["Commas","Curly Brackets","Quotes","Parenthesis"],
        answer:"Quotes"
    },
    {
        id:4,
        question: "Arrays in JavaScript can be used to store ____.",
        option:["Numbers and Strings","Other Arrays","Booleans","All of the above"],
        answer:""
    },{
    id:5,
    question: "The condition in an if/else statement is enclosed with ____.",
    option:["Quotes","Curly Brackets","Parenthesis","Square Brackets"],
    answer:""
},]
    
// Getting the result display section
var result = document.getElementsByClassName(".result");
    result.innerText = "";
// // Getting the question and setting the question
var question = document.getElementById("question");
var startButton = document.getElementById("start-button");
var timerElement = document.querySelector(".timer-count");
var timerCount = 60;
var timer;

// Creating timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.innerHTML= timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
    // Clears interval
        clearInterval(timer)
    }
    }, 1000);
};

// When the start button is clicked the start button is removed and the timer starts.
startButton.addEventListener("click", function() {
    startButton.remove();
    startTimer();
});

