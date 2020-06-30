// Timer

let milliSeconds = 0,
  seconds = 0,
  minutes = 0;
let timer;

let stopwatch = document.querySelector('.stopwatch');

// Runs the Timer
function run() {

  stopwatch.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliSeconds < 10 ? "0" + milliSeconds : milliSeconds);
  milliSeconds++;
  if (milliSeconds == 100) {
    milliSeconds = 0;
    seconds++
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

}

//Starts the Timer
function startTimer() {
  if (!timer) {

    timer = setInterval(run, 10);
  }
}

//Pauses the Timer
function pauseTimer() {

  clearInterval(timer);
  timer = false;
}

//Resets the Timer
function resetTimer() {

  clearInterval(timer);
  timer = false;
  milliSeconds = 0;
  seconds = 0;
  minutes = 0;
  stopwatch.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliSeconds < 10 ? "0" + milliSeconds : milliSeconds);
}