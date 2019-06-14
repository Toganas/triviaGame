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
    <li> ${triviaBank.array[j].bank[i]} </li>
    </ul>
    `)
    j++

    
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
