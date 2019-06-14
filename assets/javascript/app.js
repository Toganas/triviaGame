// Remove Instructions, start game

$("#start").click(firstQuestion)


function firstQuestion(){
    $("#instructions").remove();
    newQuestion()
}

// global variable to be used with triviaBank.array
var j = 0;
var timeUp;
var wins = 0
var losses = 0
// run this every time a new question is asked
function newQuestion() {
    
    // countdown timer
    
    var remaining = "Time Remaining: "
    var timer = 5;
    $("#timer").append(remaining + timer);
    setInterval(countdown, 1000);
    timeUp = setTimeout(wrong, 6000);

    function countdown() {
        timer--
        $("#timer").text(remaining + timer);
    }
    $("#question").append(triviaBank.array[j].question);
    for 
    (var i =0; i < triviaBank.array[j].bank.length; i++)
    $("#answers").append(`
    <ul>
    <li><button> ${triviaBank.array[j].bank[i]} </button></li>
    </ul>
    `)
    $("")
    
    
}

// Question and Answer Bank

var triviaBank = {
    array: [
    {question: "Who is the strongest female wizard in Fairy Tail?",
    correct: "Erza",
    bank: ["Lucy", "Erza", "Wendy", "Cana"],
    image: "../images/erza.png"},

    {question: "What is the name of the Fairy Tail wizard from Edolas?",
    correct: "Mystogan",
    bank: ["Mystogan", "Laxus", "Gildarts", "Bickslow"]},
]
}



function hurray(){
    $("#trivia").empty();
    clearTimeout(timeUp);
    $("#result").append(`
    <div>Good job, you got that right!</div>
    `)
    wins++;
    j++;
}

// do(
//     $(bank).click(correct)
// )

// while (timer > 0)

function wrong() {
    $("#trivia").empty();
    $("#result").append(`
    <div>Better luck next time!</div>
    <div>The actual answer was: ${triviaBank.array[j].correct}</div>
    <img src = ${triviaBank.array[j].image}`);
    losses++;
    j++;
}
console.log(triviaBank.array[0].correct)
