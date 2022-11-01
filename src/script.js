const COUNTDOWN_TIME = 100;

const buttons = document.querySelectorAll("button");
const countdownSpan = document.querySelector("#countdown");
const pointDisplay = document.querySelector("#point");
const displayQuestion = document.querySelector("h2");
const displayAnswer1 = document.querySelector("#answer1");
const displayAnswer2 = document.querySelector("#answer2");
const displayAnswer3 = document.querySelector("#answer3");
const displayAnswer4 = document.querySelector("#answer4");
const buttonDiv = document.querySelector("#answerBtn");
const highscoreForm = document.querySelector("#userInput");
const closeGame = document.querySelector("#game");

let optionList;

// questions
const question1 = {
  q: "What data type has two possible values, either true or false?",
  choices: ["string", "number", "if statement", "boolean"],
  correct: "boolean"
};

const question2 = {
  q: "Which of the following is the right way to write a string?",
  choices: ["const greeting = Hello World;", "const = \"Hello World\";", "greeting = Hello World;", "const greeting = \"Hello World\";"],
  correct: "const greeting = \"Hello World\";"
};

const question3 = {
  q: "An if statement checks a _____ value",
  choices: ["undefined", "NULL", "number", "boolean"],
  correct: "boolean"
};

const question4 = {
  q: "What does CSS stand for in coding?",
  choices: ["Cascading System Sheets", "Color Style Sheets", "Casual System Sheets", "Cascading Style Sheets"],
  correct: "Cascading Style Sheets"
};

const question5 = {
  q: "what will the console display when it is run?: const num = 10; num++; consol.log(num);",
  choices: ["num", "num++", "10", "11"],
  correct: "11",
};

const question6 = {
  q: "What HTML element is used if you want the largest heading?",
  choices: ["header", "h2", "head", "h1"],
  correct: "h1"
};

const question7 = {
  q: "What does a for loop do?",
  choices: ["exacutes a block of code only if a specified conditon is true", "return a random value", "exacutes a block of code when an if statment returns false", "repeats a line of code a certain number of times based on set a parameter"],
  correct: "repeats a line of code a certain number of times based on set a parameter"
};

const question8 = {
  q: "Which of the following variables is a string?",
  choices: ["const num = 13", "let yes = true", "const nothing = NULL", "const word = \"WORD\""],
  correct: "const word = \"WORD\""
};

const question9 = {
  q: "What CSS tag changes the font of an element?",
  choices: ["color:", "font-size:", "text-size:", "font-family:"],
  correct: "font-family:"
};

const question10 = {
  q: "Which of the following is NOT a javascript variable?",
  choices: ["let no = false;", "const i = 0;", "var color = \"red\";", "string text = \"Hello\";"],
  correct: "string text = \"Hello\";"
};

// randomize question order
let questions = [question1, question2, question3, question4, question5, question6,question7, question8, question9, question10];

const questionList = questions.sort((a,b) => 0.5 - Math.random());

// randomize answer order
let questionTracker = 0;

function ramdomizeOrder() {
  optionList = questions[questionTracker].choices.sort((a,b) => 0.5 - Math.random());
}

ramdomizeOrder()

// Point tracker
let pointCount = 0;

// Timer
function countDown() {
  let i = COUNTDOWN_TIME;

  const countDownInterval = setInterval(function() {
    countdownSpan.textContent = i; i--;

    if (i < 0) {
      clearInterval(countDownInterval);
    }
    if (i === 0) {
      closeGame.style.setProperty("display", "none");
      highscoreForm.style.setProperty("display", "block");
      console.log("end game");
    }
  }, 10000);
}

countDown();

// Display questions
displayQuestion.append(questionList[questionTracker].q);
displayAnswer1.append(optionList[0]);
displayAnswer2.append(optionList[1]);
displayAnswer3.append(optionList[2]);
displayAnswer4.append(optionList[3]);


// Select answer
buttonDiv.addEventListener('click', function(event) {

  if (!event.target.matches('.answer')) {
    return
  }
  if(event.target.textContent === questions[questionTracker].correct) {
        pointCount = pointCount + 10;
        console.log("correct!");
  } else {
        pointCount = pointCount - 5;
        console.log("WRONG!");
      }
      if (questionTracker === 9) {
        closeGame.style.setProperty("display", "none");
         highscoreForm.style.setProperty("display", "block");
        console.log('End Quiz')
        return
      }
    questionTracker++;
    pointDisplay.textContent = pointCount;
    displayQuestion.textContent = questionList[questionTracker].q;
    ramdomizeOrder()
    displayAnswer1.textContent = optionList[0];
    displayAnswer2.textContent = optionList[1];
    displayAnswer3.textContent = optionList[2];
    displayAnswer4.textContent = optionList[3];

})
