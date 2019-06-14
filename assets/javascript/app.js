// Remove Instructions, start game

$("#start").click(firstQuestion)


function firstQuestion(){
    $("#instructions").remove();
    newQuestion()
}

// run this every time a new question is asked
function newQuestion() {

    
    
    // countdown timer
    var remaining = "Time Remaining: "
    var timer = 30;
    $("#timer").append(remaining + timer);
    setInterval(countdown, 1000);

    function countdown() {
        timer--
        $("#timer").text(remaining + timer);
    }
    $("#question").append(triviaBank.question);
    for 
    (var i=0; i < triviaBank.bank.length; i++)
    $("#answers").append(`
    <ul>
    <li> ${triviaBank.array[i].bank[i]} </li>
    </ul>
    `)

    
}

// Question and Answer Bank

var triviaBank = {
    array: [
    {question: "Who is the strongest female wizard in Fairy Tail?",
    answer: "Erza",
    bank: ["Lucy", "Erza", "Wendy", "Cana"]},
    {question: "What is the name of the Fairy Tail wizard from Edolas?",
    answer: "Mystogan",
    bank: ["Mystogan", "Laxus", "Gildarts", "Bickslow"]},
]
}



console.log(triviaBank.array[1].bank);
