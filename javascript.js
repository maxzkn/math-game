var play = false;
var time;
var score;
var enabled = true;

function startGame() {
if (play === false) {
    document.getElementById("time").style.display = 'block';
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;
    question();
    var reset = document.getElementById("startreset").innerHTML = "Reset game!";
    if (reset.innerHTML = "Reset game!") {
        document.getElementById("startreset").onclick = function() {
            location.reload();
        }
    }
    //time remaining and game over
    time = 60;
    var timer = setInterval(function() {
        if (time > 0) {
            time -= 1;
        }
        document.getElementById("remain").innerHTML = time;
        if (time <= 0) {
            clearInterval(timer);
            document.getElementById("gameover").style.display = 'block';
            enabled = false;
            if (score >= 20) {
                document.getElementById("congrats").innerHTML = "Rajma krasavčik, davaj!";
            } else {
                document.getElementById("congrats").innerHTML = "Game over! Try better!";
            }
            document.getElementById("finalscore").innerHTML = score;
            document.getElementById("time").innerHTML = "You have no time left!";
        }
    }, 1000);
}
}

function question() {
    //generate question
    var a = Math.round(Math.random() * 10);
    var b = Math.round(Math.random() * 10);
    document.getElementById("question").innerHTML = a + " x " + b;
    result = a * b;
    //calculations
    var box = document.getElementsByClassName("box");
    answer = [];
//    answersArray = answer;
    //generate 4 random answers
    for (i = 0; i < box.length; i++) {
    answer[i] = box[i].innerHTML = Math.round(Math.random() * 100);
    }
    //put a result instead of random answer
    answer[Math.floor(Math.random() * answer.length)] = result;
    //show 3 random answers and 1 correct (result)
    for (k = 0; k < box.length; k++) {
    box[k].innerHTML = answer[k];
//    box[k].onclick = function() {
//        if (box[k].innerHTML === result) {
//            why returns "TypeError: Cannot read property 'innerHTML' of undefined at HTMLDivElement.box.<computed>.onclick" ?
//            }
//        }
    }
}

function checkAnswer(i) {
    if (enabled == true) {
    if (answer[i] == result) {
        document.getElementById("correct").style.display = 'block';
        document.getElementById("tryagain").style.display = 'none';
        hideCorrect();
        score += 1;
        document.getElementById("scorevalue").innerHTML = score;
        question();
    } else {
        document.getElementById("tryagain").style.display = 'block';
        document.getElementById("correct").style.display = 'none';
        hideTry();
        if (score != 0) {
        score -= 1;
        document.getElementById("scorevalue").innerHTML = score;
        }
    }
}
}

function hideCorrect() {
    setInterval(function() {
        document.getElementById("correct").style.display = 'none';
    }, 1000)
}
                           
function hideTry() {
    setInterval(function() {
    document.getElementById("tryagain").style.display = 'none';
    }, 1000)
}
