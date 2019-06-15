// Remove Instructions, start game

$("#start").click(firstQuestion)


function firstQuestion(){
    $("#instructions").empty();
    newQuestion()
}

// global variable to be used with triviaBank.array

var j = 0;
var timeUp;
var wins = 0;
var losses = 0;

// run this every time a new question is asked
function newQuestion() {
    // clear the previous result
    $("#result").empty();
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
            clearInterval(counting)}
    }

    //  putting the question on the page

    $("#question").append(triviaBank.array[j].question);
    for 
    (var i =0; i < triviaBank.array[j].bank.length; i++)
    $("#answers").append(`
    <ul>
    <li><button onclick='test()' class='option'> ${triviaBank.array[j].bank[i]} </button></li>
    </ul>
    `)
}

function test() {
    if (".option" == triviaBank.array.correct) {
        timer = 0;
        hurray();
    }
    else {
        timer = 0;
        wrong();
        console.log(this)
    }
}

// Question and Answer Bank

var triviaBank = {
    array: [
    {question: "Who is the strongest female wizard in Fairy Tail?",
    correct: "Erza",
    bank: ["Lucy", "Erza", "Wendy", "Cana"],
    image: "assets/images/erza.png"},

    {question: "What is the name of the Fairy Tail wizard from Edolas?",
    correct: "Mystogan",
    bank: ["Mystogan", "Laxus", "Gildarts", "Bickslow"],
    image: "assets/images/mystogan.jpg"}
]
}


// Correct answer
// $("button").click(hurray)

// console.log(click);

function hurray(){
    $("#question").empty();
    $("#answers").empty();
    $("#timer").empty();
    $("#result").append(`
    <div>Good job!  Way to go!</div>
    <div>The answer was: ${triviaBank.array[j].correct}</div>
    <img src = ${triviaBank.array[j].image}>`);
    wins++;
    j++;
    setTimeout(newQuestion, 5000)

}


// Incorrect Answer

function wrong() {
    $("#question").empty();
    $("#answers").empty();
    $("#timer").empty();
    $("#result").append(`
    <div>Better luck next time!</div>
    <div>The answer was: ${triviaBank.array[j].correct}</div>
    <img src = ${triviaBank.array[j].image}>`);
    losses++;
    j++;
    setTimeout(newQuestion,5000)
    
}
// console.log(triviaBank.array[0].correct)

// Code I don't know if I'm going to use
// do(
//     $(bank).click(correct)
// )

// while (timer > 0)