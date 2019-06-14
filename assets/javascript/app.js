// Remove Instructions, start game

$("#start").click(firstQuestion)


function firstQuestion(){
    $("#instructions").remove();
    newQuestion()
}

// run this every time a new question is asked
function newQuestion() {

    // countdown timer
    var timer = 30;
    $("#timer").append(timer);
    var seconds = setInterval(countdown, 1000);

    function countdown() {
        timer--
        $("#timer").text(timer);
    }
}

// newQuestion();

