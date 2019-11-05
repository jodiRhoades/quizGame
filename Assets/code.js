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

    }

    //location of timer and highscore
    var highscore; 
    var timer;

        highscore.postion = (0, 0);
        timer.position = (800, 0);


