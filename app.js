function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        // show questionsa 
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // CHOICES
        var choices =  quiz.getQuestionIndex().choices;
        for(var i=0; i< choices.length; i++){
            var element = document.getElementById('choice' + i);
            element.innerHTML= choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress"); 
    element.innerHTML = "Question" + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores(){
    var gameOverHtml =" '<h1>RESULT</h1>' ";
    gameOverHtml +="<h2 id='score'> Your scores is : " + quiz.score + "</h2>";
    var element = document.getElementById('quiz');
    element.innerHTML = gameOverHtml;
};


var myQuestions = [
    new Questions("Which one is not an object oriented programing language ?",["Java", "C#", "C++", "C"], "C"),
    new Questions("Which language is used for styling the WEB",["HTML", "JQUERY", "CSS", "XML"], "CSS"),
    new Questions("They are ___  main components of OOP",["1", "6", "2", "4"], "4"),
    new Questions("Which language is used for  web apps ?",["PHP", "PYTHON", "JAVASCRIPT", "ALL"], "ALL"),
    new Questions("MVC is a ___?",["LANGUAGE", "LIBRARY", "FRAMEWORK", "ALL"], "FRAMEWORK")
];

var quiz = new Quiz(myQuestions);
populate();