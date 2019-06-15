
// global variable to be used with triviaBank.array

var index = 0;
var timeUp;
var wins = 0;
var losses = 0;
var timer = 5;
var counting = "";
// Remove Instructions, start game


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
    $("#question").empty();
    $("#answers").empty();
    // countdown timer

    if (index < triviaBank.length) {
        timer = 50;
        countdown();

        //  putting the question on the page
        var h3 = $("<h3>");
        h3.text(triviaBank[index].question);
        $("#question").append(h3);
  
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
        "<p>" + "Incorrect: " + losses + "</p>"+"</h3>")

    }


}


$(document).on('click', ".answers", function () {
    var userAnswer = $(this).attr('data-userAnswer');
    var correctAnswer = $(this).attr("data-correctAnswer");
    if (userAnswer === correctAnswer) {
        wins++
        console.log('wins ' + wins);
        index++
        newQuestion(index);
    }
    else {
        losses++
        console.log('losses ' + losses)
        index++
        newQuestion(index);
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
            index++;
            newQuestion(index);

        }

    }, 1000);

    // $("#timer").text(remaining);

    // timer = 5;
    // var remaining = `Time Remaining: ${timer}`
    // $("#timer").append(remaining);

    // timeUp = setTimeout(wrong, 6000);
}
function clearCountdown() {
    clearInterval(counting)
}


// function test() {
//     if (".option" == triviaBank.array.correct) {
//         timer = 0;
//         hurray();
//     }
//     else {
//         timer = 0;
//         wrong();
//         console.log(this)
//     }
// }

// Question and Answer Bank




// Correct answer
// $("button").click(hurray)

// console.log(click);

// function hurray() {
//     $("#question").empty();
//     $("#answers").empty();
//     $("#timer").empty();
//     $("#result").append(`
//     <div>Good job!  Way to go!</div>
//     <div>The answer was: ${triviaBank.array[j].correct}</div>
//     <img src = ${triviaBank.array[j].image}>`);
//     wins++;
//     j++;
//     setTimeout(newQuestion, 5000)

// }


// Incorrect Answer

// function wrong() {
//     $("#question").empty();
//     $("#answers").empty();
//     $("#timer").empty();
//     $("#result").append(`
//     <div>Better luck next time!</div>
//     <div>The answer was: ${triviaBank.array[j].correct}</div>
//     <img src = ${triviaBank.array[j].image}>`);
//     losses++;
//     j++;
//     setTimeout(newQuestion, 5000)

// }
// console.log(triviaBank.array[0].correct)

// Code I don't know if I'm going to use
// do(
//     $(bank).click(correct)
// )

// while (timer > 0)