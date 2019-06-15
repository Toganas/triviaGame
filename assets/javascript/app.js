// Remove Instructions, start game

$("#start").click(firstQuestion)


function firstQuestion(){
    $("#instructions").empty();
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
    var counting = setInterval(countdown, 1000);
    timeUp = setTimeout(wrong, 6000);

    function countdown() {
        timer--
        $("#timer").text(remaining + timer);
        if (timer===0) {
            clearInterval(counting);
        }
    }
    $("#question").append(triviaBank.array[j].question);
    for 
    (var i =0; i < triviaBank.array[j].bank.length; i++)
    $("#answers").append(`
    <ul>
    <li><button class="option"> ${triviaBank.array[j].bank[i]} </button></li>
    </ul>
    `)
    
    
    
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

$(".option").click(hurray)

function hurray(){
    $("#question").empty();
    $("#answers").empty();
    $("#timer").empty();
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
    $("#question").empty();
    $("#answers").empty();
    $("#timer").empty();
    $("#result").append(`
    <div>Better luck next time!</div>
    <div>The actual answer was: ${triviaBank.array[j].correct}</div>
    <img src = ${triviaBank.array[j].image}`);
    losses++;
    j++;
    setTimeout(newQuestion,5000)
    
}
console.log(triviaBank.array[0].correct)
