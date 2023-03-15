var myQuestions = [
    {
            id:0,
            question: "Who is identified as the lone land animal in Bikini Bottom?",
            option:["Spongebob","Patrick","Sandy"],
            answer:"Sandy"
    },
    {
        id:2,
        question: "What shirt color does SpongeBob usually wear?",
        option:["Blue","White","Brown"],
        answer:"White"
    },
    {
        id:3,
        question: "Who has a wife named Karen?",
        option:["Mr.Krabs","Squidward","Plankton"],
        answer:"Plankton"
    },
    {
        id:4,
        question: "What color are Spongebob's eyes?",
        option:["Green","Blue","Brown"],
        answer:"Blue"
    },{
    id:5,
    question: "In the SpongeBob SquarePants movie, what do SpongeBob and Patrick use to drown their sorrows?",
    option:["Ice-Cream","Jelly-Fishing","Bubble-blowing"],
    answer:"Ice-Cream"
},]
    
// Getting the result display section
var result = document.getElementsByClassName(".result");
    result[0].innerText = "";
// // Getting the question and setting the question
var question = document.getElementById("question");
    question.innerText = myQuestions[id].question;
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

