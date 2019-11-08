function startquiz() {
    // grab id of button through js//

    var btn = document.getElementById("startbtn");
    //hiding start button on click, manipulating js through css//
    btn.style.display = "none";

    var landpg = document.getElementById("startpg");
    //hiding start page on click, manipulating js through css//
    landpg.style.display = "none";


    var quiz = document.getElementById("quizboard");
    quiz.style.display = "block";
    writeButton()
    timer()
}
var timeInterval
var questionPostion = 0
var timeLeft = questions.length * 15
var domTime = document.getElementById('timer')
function writeButton() {
    document.getElementById('actualQuestion').textContent = questions[questionPostion].title
    for (let i = 0; i < 4; i++) {
        var currentButton = document.getElementById('btn' + i)
        currentButton.textContent = questions[questionPostion].choices[i]
        currentButton.onclick = function () { clicked(questions[questionPostion].choices[i]) }
    }
}

function clicked(answer) {
    console.log(answer)
    if (answer === questions[questionPostion].answer) {
        console.log('correct')
    }
    else {
        console.log('wrong')
        timeLeft = timeLeft - 10
    }
    questionPostion++
    if (questionPostion === questions.length) {
        clearInterval(timeInterval)
        console.log('your score= ' + timeLeft)
        endGame()
    }
    else {
        writeButton()
    }
}

function timer() {
    timeInterval = setInterval(function () {
        timeLeft--;
        domTime.textContent = 'Seconds left: ' + timeLeft
        if (timeLeft === 0) {
            clearInterval(timeInterval)
            console.log('out of time')
        }

    }, 1000);
}
function endGame() {
    document.getElementById('actualQuestion').innerHTML = '<h2>All Done!</h2><br> Your final score: ' + timeLeft 
    document.getElementById('answerBtns').innerHTML = 'Enter Initials <input type="text" name="initials"> <button id="submitInitials" type="button"> submit</button>'
}

#submitInitials {
    font-family: sans-serif;
    margin: ;
}
