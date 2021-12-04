//Called Variables
// var startPage = document.querySelector("#startpage");
// var quizHead = document.querySelector(".quizhead");
// var startBtn = document.querySelector("#startBtn");
// var questionPage = document.querySelector (".questionpage");
// var question = document.querySelector (".question");
// var answer1 = document.querySelector(".answer1");
// var answer2 = document.querySelector(".answer2");
// var answer3 = document.querySelector(".answer3");
// var answer4 = document.querySelector(".answer4");
// var postGamePage = document.querySelector("#postgamepage");
// var score = document.querySelector("#score");
// var submitBtn = document.querySelector("#submissionbtn");
// var highScorePage = document.querySelector("#highscorepage");
let header = document.querySelector(".header");
let intro = document.querySelector("#intro");
let main = document.querySelector(".main");
let startBtn = document.querySelector("#startbtn");
let options = document.querySelector("#options");
let question = document.querySelector("#question")
let ans1 = document.querySelector("#ans1");
let ans2 = document.querySelector("#ans2");
let ans3 = document.querySelector("#ans3");
let ans4 = document.querySelector("#ans4");
let timer = document.querySelector("#timer");
let scoring = document.querySelector('#scoring');
let index = -1;
let ansCount = 1;
let secondsLeft = 60;
let timeLeft = document.querySelector("#timeleft");


//Question and answers array

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
    question: "Last major Championship?",
    answer1: "Hockey",
    answer2: "Football",
    answer3: "Baseball",
    answer4: "Basketball",
    correctAnswer: "Baseball",
  },
];
//Starts the quiz
startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", startTimer);


function startTimer() {
  setInterval(function () {
    if (secondsLeft > 0) {
      secondsLeft--;
      localStorage.setItem("yourScore", secondsLeft);

      timer.textContent = secondsLeft;

    } if (index == questionArr.length) {
      clearInterval();


    }
    if (secondsLeft == 0) {
      window.location = "index2.html";
      clearInterval();
      console.log("fin")
      // document.location.reload();

    }
  }, 1000);
}

function startQuiz() {


  index++

if(index == questionArr.length){
  window.location = "index2.html"
  if(localStorage.getItem("yourScore") > localStorage.getItem("highScore") ){
    localStorage.setItem("highScore", localStorage.getItem("yourScore"))
  }
}
  if (index < questionArr.length) {
    question.textContent = questionArr[index].question;
    ans1.textContent = questionArr[index].answer1;
    ans2.textContent = questionArr[index].answer2;
    ans3.textContent = questionArr[index].answer3;
    ans4.textContent = questionArr[index].answer4;

  }
}
//event listeners to track answer
ans1.addEventListener("click", checkAnswer);
ans2.addEventListener("click", checkAnswer);
ans3.addEventListener("click", checkAnswer);
ans4.addEventListener("click", checkAnswer);

//function called by button clicks above
function checkAnswer(event) {




  if (questionArr[index].correctAnswer == event.target.textContent) {
    console.log("correct")


  } else if (questionArr[index].correctAnswer != event.target.textContent) {
    console.log("wrong");
    secondsLeft = secondsLeft - 10
  }
  if (index == questionArr.length) {
    window.location = "index2.html";
    document.getElementById("questionBox").style.visibility = "hidden";
    console.log("hey")
  }




  console.log(questionArr[index].correctAnswer == event.target.textContent);
  console.log(event.target.textContent);
  console.log(questionArr[index].correctAnswer);
  startQuiz();
}



function postScore() {
  if (secondsLeft == 0) {
    console.log("Finished!");
    scoring.append(ansCount)
    console.log(ansCount);

  }
}

postScore();



