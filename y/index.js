// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;
let isStopwatchRunning = false;

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateStopwatch() {
  stopwatchTime++;
  document.getElementById('stopwatch-display').textContent = formatTime(stopwatchTime);
}

function startStopwatch() {
  if (!isStopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    isStopwatchRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  isStopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById('stopwatch-display').textContent = formatTime(stopwatchTime);
}

document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('pause-btn').addEventListener('click', pauseStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);


// Countdown Timer
let countdownInterval;
let countdownTime = 0;
let isCountdownRunning = false;

function updateCountdown() {
  if (countdownTime > 0) {
    countdownTime--;
    document.getElementById('countdown-display').textContent = formatTime(countdownTime);
  } else {
    pauseCountdown();
  }
}

function startCountdown() {
  if (!isCountdownRunning) {
    countdownTime = 3600; // Change the countdown time here (in seconds)
    document.getElementById('countdown-display').textContent = formatTime(countdownTime);
    countdownInterval = setInterval(updateCountdown, 1000);
    isCountdownRunning = true;
  }
}

function pauseCountdown() {
  clearInterval(countdownInterval);
  isCountdownRunning = false;
}
