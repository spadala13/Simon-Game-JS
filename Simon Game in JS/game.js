
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var playing = false;

$(document).keypress(function() {
    if (playing == false) {
        nextSequence();
        started = true;
    } 
});

function playSound(name) {
    var butSound = new Audio("sounds/"+name+".mp3");
    butSound.play();
}

$(".btn").click(function(e) {
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed")  
    }, 100);
}


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomNum = Math.random(); // creating a random number
    randomNum = Math.floor(randomNum * 4); // creating a random from 0(included) to 4(not included)
    var randomChosenColour = buttonColours[randomNum]; // selecting a colour in the array buttonColours by using the random number as the index

    gamePattern.push(randomChosenColour); // push the selected colour to the end of the array gamePattern

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    

}


function checkAnswer(curLevel) {
    console.log(gamePattern[curLevel]);
    console.log(userClickedPattern[curLevel]);
    if (gamePattern[curLevel] === userClickedPattern[curLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            console.log(userClickedPattern);
            console.log(gamePattern);
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function finalCheck(c) {
    if (c === true) {
        
    } else {
        
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}







