//Called Variables
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
var submitBtn = document.querySelector("#submissionbtn");
var highScorePage = document.querySelector("#highscorepage");
var arrNum = 0;
var timeLeft= document.querySelector("#timeleft");
//Hides extraneous cards to start
questionPage.style.display = "none"
postGamePage.style.display = "none"
highScorePage.style.display = "none"

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
        question: "Last major chip?",
        answer1: "Baseball",
        answer2: "Football",
        answer3: "Hockey",
        answer4: "Basketball",
        correctAnswer: "Basketball",
      },
    ];
//Starts the quiz
startBtn.addEventListener ("click", startQuiz);

function startQuiz(){
    console.log("start the quiz");
    startPage.style.display = "none";
    questionPage.style.display = "initial";
    questionRender();
    // qTime();
}
//Populates question and answers in HTML
function questionRender() {
    question.textContent = questionArr[arrNum].question;
    answer1.textContent = questionArr[arrNum].answer1;
    answer2.textContent = questionArr[arrNum].answer2;
    answer3.textContent = questionArr[arrNum].answer3;
    answer4.textContent = questionArr[arrNum].answer4;
    correctAnswer = questionArr[arrNum].correctAnswer;
  }
// Attempt to add scoring 
//   answers.addEventListener("click", function(event){
//       var userAnswer = event.target;
//       if (userAnswer == correctAnswer) {
//           arrNum++;
//           console.log ("correct");
//           if (arrNum<questionArr.length){
//               else {
//                   timerCount = timerCount - 12
//               }
//           }
//       }
//   }
//   )

  // AAttempt to countdown 
// function countdown() {
  
//     var timeInterval = setInterval(function () {
//       if (timeLeft > 1) {
        
//         time.textContent = timeLeft + ' seconds remaining';
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//         timer.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//         timertime.textContent = '';
       
//         clearInterval(timeInterval);
        
//       }
//     }, 1200);
//   }