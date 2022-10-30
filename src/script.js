const COUNTDOWN_TIME = 100;

const buttons = document.querySelectorAll("button");
const countdownSpan = document.querySelector("#countdown");
const pointDisplay = document.querySelector("#point");
const displayQuestion = document.querySelector("h2");
const displayAnswer1 = document.querySelector("#answer1");
const displayAnswer2 = document.querySelector("#answer2");
const displayAnswer3 = document.querySelector("#answer3");
const displayAnswer4 = document.querySelector("#answer4");

// questions
const question1 = {
  q: "What data type has two possible values, either true or false?",
  wrong1: "string",
  wrong2: "number",
  wrong3: "if statement",
  correct: "boolean"
};

const question2 = {
  q: "Which of the following is the right way to write a string?",
  wrong1: "const greeting = Hello World;",
  wrong2: "const = \"Hello World\";",
  wrong3: "greeting = Hello World;",
  correct: "const greeting = \"Hello World\";"
};

const question3 = {
  q: "An if statement checks a _____ value",
  wrong1: "undefined",
  wrong2: "NULL",
  wrong3: "number",
  correct: "boolean"
};

const question4 = {
  q: "What does CSS stand for in coding?",
  wrong1: "Cascading System Sheets",
  wrong2: "Color Style Sheets",
  wrong3: "Casual System Sheets",
  correct: "Cascading Style Sheets"
};

const question5 = {
  q: "what will the console display when it is rn?: const num = 10; num++; consol.log(num);",
  wrong1: "num",
  wrong2: "num++",
  wrong3: "10",
  correct: "11"
};

const question6 = {
  q: "What HTML element is used if you want the largest heading?",
  wrong1: "header",
  wrong2: "h2",
  wrong3: "head",
  correct: "h1"
};

const question7 = {
  q: "What does a for loop do?",
  wrong1: "exacutes a block of code only if a specified conditon is true",
  wrong2: "return a random value",
  wrong3: "exacutes a block of code when an if statment returns false",
  correct: "repeats a line of code a certain number of times based on set a parameter"
};

const question8 = {
  q: "Which of the following variables is a string?",
  wrong1: "const num = 13",
  wrong2: "let yes = true",
  wrong3: "const nothing = NULL",
  correct: "const word = \"WORD\""
};

const question9 = {
  q: "What CSS tag changes the font of an element?",
  wrong1: "color:",
  wrong2: "font-size:",
  wrong3: "text-size:",
  correct: "font-family:"
};

const question10 = {
  q: "Which of the following is NOT a javascript variable?",
  wrong1: "let no = false;",
  wrong2: "const i = 0;",
  wrong3: "var color = \"red\";",
  correct: "string text = \"Hello\";"
};

// randomize question order
let questions = [question1, question2, question3, question4, question5, question6,question7, question8, question9, question10];

const questionList = questions.sort((a,b) => 0.5 - Math.random());

// randomize answer order
let questionTracker = 0;
let options = [questionList[questionTracker].wrong1, questionList[questionTracker].wrong2, questionList[questionTracker].wrong3, questionList[questionTracker].correct];

const answerList = options.sort((a,b) => 0.5 - Math.random());

// Point tracker
let pointCount = 0;

// Timer
function countDown() {
  let i = COUNTDOWN_TIME;

  const countDownInterval = setInterval(function() {
    countdownSpan.textContent = i; i--;

    if (i < 0) {
      clearInterval(countDownInterval);
      //location.replace("./index.html")
    }
  }, 1000);
}

countDown();

// Display questions
displayQuestion.append(questionList[questionTracker].q);
displayAnswer1.append(options[0]);
displayAnswer2.append(options[1]);
displayAnswer3.append(options[2]);
displayAnswer4.append(options[3]);

// Select answer
buttons.forEach(function(button) {
  button.addEventListener("click", function handleClick(event) {
    if (event.target.id === "answer1") {
      if (options[0] === questions[questionTracker].correct) {
        pointCount = pointCount + 10;
        console.log("correct!");
      } else {
        pointCount = pointCount - 5;
        console.log("WRONG!");
      }
    };
    if (event.target.id === "answer2") {
      if (options[1] === questions[questionTracker].correct) {
        pointCount = pointCount + 10;
        console.log("correct!");
      } else {
        pointCount = pointCount - 5;
        console.log("WRONG!");
      }
    };
    if (event.target.id === "answer3") {
      if (options[2] === questions[questionTracker].correct) {
        pointCount = pointCount + 10;
        console.log("correct!");
      } else {
        pointCount = pointCount - 5;
        console.log("WRONG!");
      }
    };
    if (event.target.id === "answer4") {
      if (options[3] === questions[questionTracker].correct) {
        pointCount = pointCount + 10;
        console.log("correct!");
      } else {
        pointCount = pointCount - 5;
        console.log("WRONG!");
      }
    };
    questionTracker++;
    pointDisplay.textContent = pointCount;
  });
});