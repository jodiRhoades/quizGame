function startquiz() {
    // grab id of button through js//
    
    var btn = document.getElementById("startbtn");
    //hiding start button on click, manipulating js through css//
    btn.style.display = "none";

    var quiz = document.getElementById("quizboard");
    quiz.style.display = "block";

    }