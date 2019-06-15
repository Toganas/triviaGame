
// global variable to be used with triviaBank.array

var index = 0;
var timeUp;
var wins = 0;
var losses = 0;
var timer = 30;
var counting = "";

// Question and Answer Bank

var triviaBank = [
    {
        question: "Who is the strongest female wizard in Fairy Tail?",
        correct: "Erza",
        bank: ["Lucy", "Erza", "Wendy", "Cana"],
        image: "assets/images/erza.png"
    },
    {
        question: "What is the name of the Fairy Tail wizard from Edolas?",
        correct: "Mystogan",
        bank: ["Mystogan", "Laxus", "Gildarts", "Bickslow"],
        image: "assets/images/mystogan.jpg"
    }
]


// Remove Instructions, start game

$("#start").on('click', function () {
    $("#instructions").empty();
    newQuestion(index)
})

// run this every time a new question is asked
function newQuestion(index) {
    
    // clear the previous result
    $("#result").empty();
    $("#question").empty();
    $("#answers").empty();
    // countdown timer

    $("#timer").text("Time Remaining: " + 30)
    if (index < triviaBank.length) {
        timer = 30;
        countdown();

        //  putting the question on the page
        var h3 = $("<h3>");
        h3.text(triviaBank[index].question);
        $("#question").append(h3);

        // putting the answers in buttons

        var currentAnswers = triviaBank[index].bank;
        for (var i = 0; i < currentAnswers.length; i++) {
            var button = $("<button>");
            button.text(currentAnswers[i]);
            button.attr('data-userAnswer', currentAnswers[i]);
            button.attr("data-correctAnswer", triviaBank[index].correct);
            button.addClass('answers')
            $("#answers").append(button);
        }
    }
    else {
        $("#final").html("<h3>" + "<p>" + "Your final score is:" + "</p>" +
            "<p>" + "Correct: " + wins + "</p>" +
            "<p>" + "Incorrect: " + losses + "</p>" + "</h3>")

    }


}


$(document).on('click', ".answers", function () {
    var userAnswer = $(this).attr('data-userAnswer');
    var correctAnswer = $(this).attr("data-correctAnswer");
    if (userAnswer === correctAnswer) {
        wins++
        console.log('wins ' + wins);
        hurray();
    }
    else {
        losses++
        console.log('losses ' + losses)
        wrong();
    }
    console.log(userAnswer);
    console.log(correctAnswer);
})


function countdown() {
    counting = setInterval(function () {
        
        timer--;
        $("#timer").text("Time Remaining: " + timer);
        console.log(timer);
        if (timer === 0) {
            clearCountdown();
            wrong();
        }

    }, 1000);


}
function clearCountdown() {
    clearInterval(counting)
}

function nextQuestion(){
    newQuestion(index);
}
// Correct Answer


function hurray() {
    $("#question").empty();
    $("#answers").empty();
    $("#timer").empty();
    clearCountdown();
    $("#result").append(`
    <div>Good job!  Way to go!</div>
    <div>The answer was: ${triviaBank[index].correct}</div>
    <img src = ${triviaBank[index].image}>`);
    index++;
    setTimeout(nextQuestion, 5000);
    
}



// Incorrect Answer

function wrong() {
    $("#question").empty();
    $("#answers").empty();
    $("#timer").empty();
    $("#result").append(`
    <div>Better luck next time!</div>
    <div>The answer was: ${triviaBank.array[index].correct}</div>
    <img src = ${triviaBank.array[index].image}>`);
    index++;
    setTimeout(nextQuestion, 5000);
}