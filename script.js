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
let timer = document.querySelector ("#timer");
let index = 0;
let timeLeft= document.querySelector("#timeleft");
//Hides extraneous cards to start
// questionPage.style.display = "none"
// postGamePage.style.display = "none"
// highScorePage.style.display = "none"

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
  if (questionArr[index] > questionArr.length) {
        
  } else {
  question.innerHTML = questionArr[index].question;
  ans1.innerHTML = questionArr[index].answer1;
  ans2.innerHTML = questionArr[index].answer2;
  ans3.innerHTML = questionArr[index].answer3;
  ans4.innerHTML = questionArr[index].answer4;
  }
}

ans1.addEventListener("click", checkAnswer);
ans2.addEventListener("click", checkAnswer);
ans3.addEventListener("click", checkAnswer);
ans4.addEventListener("click", checkAnswer);

function checkAnswer(event){
  if (questionArr[index].correct == event.target.innerHTML){
    console.log("correct")
  }else{
    console.log("wrong");
  }
  index++
  startQuiz();
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


// Put an event listener on each button, have it run a function to check true/false