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

}

// Question and Answer Bank

var triviaBank = {
    question: "Who is the strongest female wizard in Fairy Tail?",
    answer: "Erza",
    bank: "Lucy, Erza, Wendy, Cana"
}

console.log(triviaBank)

