var startPage =document.querySelector(".startpage");


var questionArr = [
    {
        question1 : "Who is the Chicago Bears starting QB",
        answer11 : "Patrick Mahomes",
        answer12 : "Deshaun Watson",
        answer13 : "Mitchell Truisky",
        answer14 : "None of the above",
        correct1 : "answer14" 
    }
    {
        question2 : "What Country dominated the 2021 Ryder Cup",
        answer21 : "Europe",
        answer22 : "Spain",
        answer23 : "Russia",
        answer24 : "America",
        correct2 : "answer24"

    }
    {
        question3 : "First Covid positive NBA player?",
        answer31 : "Rudy Gobert",
        answer32 : "Mike Conley",
        answer33 : "Jeff Teague",
        answer34: "Kevin Durant",
    }
]



function startGame() {
    isWin = false;
    timerCount = 10;
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }