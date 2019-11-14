function startUp() {
    var localScore = localStorage.getItem('scoreList')
    console.log(localScore)
    var scoreAsArray = JSON.parse(localScore)


    var scoreList = JSON.parse(localStorage.getItem("scoreList"))
    console.log(scoreList)
    var highScoreDiv = document.getElementById('highscores')
    scoreList.sort(function(a, b){return b.score-a.score});
    for (let i = 0; i < scoreList.length; i++) {     
         var div = document.createElement('DIV')
        div.classList.add('card')
        div.textContent = 'User: '+scoreList[i].userName+' Score:'+scoreList[i].score+' '
        highScoreDiv.appendChild(div)
    }

}
startUp()