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
//this will bring up the questions with choices of answers
function writeButton() {
  document.getElementById('actualQuestion').textContent = questions[questionPostion].title
  for (let i = 0; i < 4; i++) {
    var currentButton = document.getElementById('btn' + i)
    currentButton.textContent = questions[questionPostion].choices[i]
    currentButton.onclick = function () { clicked(questions[questionPostion].choices[i]) }
  }
}
//this is where they either click on the righ or worng answer.
function clicked(answer) {
  console.log(answer)
  if (answer === questions[questionPostion].answer) {
    console.log('correct')
    //Why does it break my code if I put "1., 2., ... inside the answer string?  if I do this, every single answer is counted as wrong."
  }
  //but if it is a wrong answer 10 seconds will be taken of the timer for the final score
  else {
    console.log('wrong')
    timeLeft = timeLeft - 10;
  }
  //this is where it will keep looping through all the questions until the end
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
    //this is where it will tell you the final score
    domTime.textContent = 'Seconds left: ' + timeLeft
    if (timeLeft === 0) {
      clearInterval(timeInterval)
      console.log('out of time')
    }

  }, 1000);
}

function endGame() {
  //Have the final score revealed
  document.getElementById('actualQuestion').innerHTML = '<h2>All Done!</h2><br> Your final score: ' + timeLeft
  document.getElementById('actualQuestion').setAttribute("style", "font-size: 24px;");
  //Have an initials box with a submit button that will open highscore page
  document.getElementById('answerBtns').innerHTML = 'Enter Initials <input type="text" name="initials" placeholder="Initials" id= "grabInitials"> <button id="submitInitials" type="button" onclick = "scoreResults()"> SUBMIT</button>'
  document.getElementById('answerBtns').setAttribute("style", "border-radius: 10px; color:black; padding: 25px; font-size: 30px; text-align: center; font-family: sans-serif;");
}
//this is the function that will create local storage for highscore
function scoreResults() {
  // grab user name
  var user = document.getElementById("grabInitials").value;
  // grab highscore
  var score = timeLeft;
  // grab past highscores and users names/Object
  var scoreList = localStorage.getItem("scoreList");
  // score current score and name in object    
  console.log(user);
  console.log(score);
  if (scoreList == null) {
    scoreList = {};
  }
  else {
    scoreList = JSON.parse(scoreList);
  }
  //save to local storage
  scoreList[user] = score;
  localStorage.setItem("scoreList", JSON.stringify(scoreList));
  console.log(scoreList);

}

// var submitInput = document.querySelector("#submit-text");
// var submitForm = document.querySelector("#submit-form");
// var submitList = document.querySelector("#submit-list");

// var submits = [];

// init();

// function renderSubmits() {
//   // Clear todoList element and update todoCountSpan
//   submitList.textContent = "";

//   // Render a new li for each todo
//   for (var i = 0; i < submit.length; i++) {
//     var submit = submits[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     li.appendChild(button);
//     submitList.appendChild(li);
//   }
// }

// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   var storedSubmits = JSON.parse(localStorage.getItem("submits"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedSubmits !== null) {
//     submits = storedSubmits;
//   }

//   // Render todos to the DOM
//   rendersubmit();
// }

// function () {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem("submits", JSON.stringify(todos));
// }

// // When form is submitted...
// submitForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var submitText = submitInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (submitText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   submits.push(submitText);
//   submitInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeSubmits();s
//   renderSubmits();
// });

// // submitInitials.addEventListener("submit", function(event) {
// //     event.preventDefault(); 

// //     var submitText= submitInput.value.trim();

// //     if (submitText === "") {
// //         return;
// //       }

// //     todos.push(todoText);
// //     todoInput.value = "";

// //     storeSubmit();
// //     renderSubmit();
// // });
// // }