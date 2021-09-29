var startPage = document.querySelector("#startpage");
var quizHead = document.querySelector(".quizhead");
var startBtn = document.querySelector("#startBtn");
var questionPage = document.querySelector (".questionpage");
var question = document.querySelector (".question");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var postGamePage = document.querySelector("#postgamepage");
var score = document.querySelector("#score");
var submitBtn = document.querySelector("#submitbtn");
var highScorePage = document.querySelector("#highscorepage");
var arrNum = 0;

questionPage.style.display = "none"
postGamePage.style.display = "none"
highScorePage.style.display = "none"



const questionArr = [
    {
        question: "Best player?",
        answer1: "Tom Brady",
        answer2: "Drew Brees",
        answer3: "Payton Manning",
        answer4: "Tyrod Taylor",
        correctAnswer: "Tom Brady",
      },
    
      {
        question: "Best Team?",
        answer1: "Pats",
        answer2: "Colts",
        answer3: "Jags",
        answer4: "Eagles",
        correctAnswer: "Pats",
      },
    
      {
        question: "Best Player?",
        answer1: "Lebron",
        answer2: "MJ",
        answer3: "Kobe",
        answer4: "Tatum",
        correctAnswer: "Lebron",
      },
    
      {
        question: "Best Team?",
        answer1: "Celts",
        answer2: "Yanks",
        answer3: "Titans",
        answer4: "Archers",
        correctAnswer: "Celts",
      },
    
      {
        question: "Last major chip?",
        answer1: "Baseball",
        answer2: "Football",
        answer3: "Hockey",
        answer4: "Basketball",
        correctAnswer: "Basketball",
      },
    ];

startBtn.addEventListener ("click", startQuiz);

function startQuiz(){
    console.log("start the quiz");
    startPage.style.display = "none";
    questionPage.style.display = "initial";
    questionRender();
    // qTime();
}
function questionRender() {
    question.textContent = questionArr[arrNum].question;
    answer1.textContent = questionArr[arrNum].answer1;
    answer2.textContent = questionArr[arrNum].answer2;
    answer3.textContent = questionArr[arrNum].answer3;
    answer4.textContent = questionArr[arrNum].answer4;
    correctAnswer = questionArr[arrNum].correctAnswer;
  }