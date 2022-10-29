const COUNTDOWN_TIME = 100;

const answers = document.querySelectorAll("button");
const countdownSpan = document.querySelector("#countdown")

// questions
const question1 = {
  q: "What data type has two possible values, either true or false?",
  wrong: "string",
  wrong: "number",
  wrong: "if statement",
  correct: "boolean"
};

const question2 = {
  q: "Which of the following is the right way to write a string?",
  wrong: "const greeting = Hello World;",
  wrong: "const = \"Hello World\";",
  wrong: "greeting = Hello World;",
  correct: "const greeting = \"Hello World\";"
};

const question3 = {
  q: "An if statement checks a _____ value",
  wrong: "undefined",
  wrong: "NULL",
  wrong: "number",
  correct: "boolean"
};

const question4 = {
  q: "What does CSS stand for in coding?",
  wrong: "Cascading System Sheets",
  wrong: "Color Style Sheets",
  wrong: "Casual System Sheets",
  correct: "Cascading Style Sheets"
};

const question5 = {
  q: "what will the console display when it is rn?: const num = 10; num++; consol.log(num);",
  wrong: "num",
  wrong: "num++",
  wrong: "10",
  correct: "11"
};

const question6 = {
  q: "What HTML element is used if you want the largest heading?",
  wrong: "header",
  wrong: "h2",
  wrong: "head",
  correct: "h1"
};

const question7 = {
  q: "What does a for loop do?",
  wrong: "exacutes a block of code only if a specified conditon is true",
  wrong: "return a random value",
  wrong: "exacutes a block of code when an if statment returns false",
  correct: "repeats a line of code a certain number of times based on set a parameter"
};

const question8 = {
  q: "Which of the following variables is a string?",
  wrong: "const num = 13",
  wrong: "let yes = true",
  wrong: "const nothing = NULL",
  correct: "const word = \"WORD\""
};

const question9 = {
  q: "What CSS tag changes the font of an element?",
  wrong: "color:",
  wrong: "font-size:",
  wrong: "text-size:",
  correct: "font-family:"
};

const question10 = {
  q: "Which of the following is NOT a javascript variable?",
  wrong: "let no = false;",
  wrong: "const i = 0;",
  wrong: "var color = \"red\";",
  correct: "string text = \"Hello\";"
};

let questionOrder = [question1, question2, question3, question4, question5, question6,question7, question8, question9, question10];

console.log(question2.wrong);

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

answers.forEach(function(button) {
  button.addEventListener("click", function handleClick(event){
    console.log(event.target.id);
  });
});