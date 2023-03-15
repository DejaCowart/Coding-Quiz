// When clicking on the start button the button is removed and a question pops up with a list of answers and a timer that counts down

// Targeting the start button
var startButton = document.getElementById("start-button");
var timerElement = document.querySelector(".timer-count");
var timerCount = 60;
var timer;

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

// When the start button is clicked the button is removed
startButton.addEventListener("click", function() {
    startButton.remove();
    startTimer();
});

