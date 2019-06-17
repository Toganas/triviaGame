
// global variable to be used with triviaBank.array

var index = 0;
var timeUp;
var wins = 0;
var losses = 0;
var timer = 30;
var counting = "";


// Shuffling Questions


function shuffleQuestion(triviaBank) {
    var shuffle = triviaBank.length, t, i;

    while (shuffle) {

        i = Math.floor(Math.random() * shuffle--);

        t = triviaBank[shuffle];
        triviaBank[shuffle] = triviaBank[i];
        triviaBank[i] = t;

    }
    return triviaBank;

}
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
    },
    {
        question: "Who is the dragon slayer mage that excels in healing magic?",
        correct: "Wendy",
        bank: ["Gajeel", "Natsu", "Wendy", "Sting"],
        image: "assets/images/wendy_marvell.png",
    },
    {
        question: "Who was the founding guild master of Fairy Tail?",
        correct: "Mavis",
        bank: ["Gildarts", "Makarov", "Mavis", "Macao"],
        image: "assets/images/mavis.jpg"
    },
    {
        question: "Which wizard likes to strip any time they're in battle?",
        correct: "Gray",
        bank: ["Gray", "Natsu", "Lucy", "Lyon"],
        image: "assets/images/gray.jpg"
    },
    {
        question: "Which ice wizard is in Lamia Scale?",
        correct: "Lyon",
        bank: ["Gray", "Ur", "Ultear", "Lyon"],
        image: "assets/images/lyon.png"
    },
    {
        question: "During the 7 year absence of Natsu, Makarov, etc., which guild became known as the most powerful?",
        correct: "Sabertooth",
        bank: ["Lamia Scale", "Blue Pegasus", "Tartaros", "Sabertooth"],
        image: "assets/images/sabertooth.png"
    },
    {
        question: "What are cats that can fly and talk called?",
        correct: "Exceeds",
        bank: ["Meowsicals", "Exceeds", "Harpies", "Kitties"],
        image: "assets/images/exceed.jpg"
    },
    {
        question: "What does E.N.D. stand for?",
        correct: "Etherious Natsu Dragneel",
        bank: ["Endless Night Demon", "Eternal Nightmare Dragon", "Everlasting Normal Daylight", "Etherious Natsu Dragneel"],
        image: "assets/images/natsu.jpg"
    },
    {
        question: "Who is Natsu's older brother?",
        correct: "Zeref",
        bank: ["Laxus", "Jellal", "Zeref", "Romeo"],
        image: "assets/images/zeref.jpg"
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
            button.addClass('answers');
            $("#answers").append(button);
        }
    }
    // If no answer after 30 seconds
    else {
        clearCountdown();
        $("#timer").empty();
        var unanswered = 10 - wins - losses;
        $("#final").html("<h3>" + "<p>" + "Your final score is:" + "</p>" +
            "<p>" + "Correct: " + wins + "</p>" +
            "<p>" + "Incorrect: " + losses + "</p>" +
            "<p>" + "Unanswered: " + unanswered + "</h3>")
        var playAgain = $("<button>");
        playAgain.text("Play Again");
        playAgain.addClass('reset');
        $("#final").append(playAgain);
    }
}
// Resetting the Trivia
$(document).on("click", ".reset", function () {
    $("#final").empty();
    index = 0;
    wins = 0;
    losses = 0;
    newQuestion(index)
}),
// testing whether the click is correct or not

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

function nextQuestion() {
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
    clearCountdown();
    $("#result").append(`
    <div>Better luck next time!</div>
    <div>The answer was: ${triviaBank[index].correct}</div>
    <img src = ${triviaBank[index].image}>`);
    index++;
    setTimeout(nextQuestion, 5000);
}

