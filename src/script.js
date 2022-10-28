const COUNTDOWN_TIME = 30;

const answers = document.querySelectorAll("button");
const countdownSpan = document.querySelector("#countdown")

// Timer
function countDown() {
  let i = COUNTDOWN_TIME;

  const countDownInterval = setInterval(function() {
    countdownSpan.textContent = i; i--;

    if (i < 0) {
      clearInterval(countDownInterval);
    }
  }, 1000);
}

countDown();