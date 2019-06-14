// Remove Instructions, start game

$("#start").click(firstQuestion)


function firstQuestion(){
    $("#instructions").remove();
    newQuestion()
}

// run this every time a new question is asked
function newQuestion() {
    
    // countdown timer
    var j= 0
    var remaining = "Time Remaining: "
    var timer = 30;
    $("#timer").append(remaining + timer);
    setInterval(countdown, 1000);

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
    j++

    
}

// Question and Answer Bank

var triviaBank = {
    array: [
    {question: "Who is the strongest female wizard in Fairy Tail?",
    correct: "Erza",
    bank: ["Lucy", "Erza", "Wendy", "Cana"]},

    {question: "What is the name of the Fairy Tail wizard from Edolas?",
    correct: "Mystogan",
    bank: ["Mystogan", "Laxus", "Gildarts", "Bickslow"]},
]
}

$(triviaBank.array.bank).click(hurray)

function hurray(){
    $("#result").append("Good job!")
}

// do(
//     $(bank).click(correct)
// )

// while (timer > 0)

