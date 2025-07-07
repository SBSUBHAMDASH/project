let timerInterval;
let totalSeconds = 0;
let isRunning = false;
const display = document.getElementById('time-display');
const alertMsg = document.getElementById('alert-msg');
const alertSound = document.getElementById('alert-sound');

function updateDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  display.textContent = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

function startTimer() {
  if (isRunning) return;
  if (totalSeconds === 0) {
    const mins = parseInt(document.getElementById('minutes').value) || 0;
    const secs = parseInt(document.getElementById('seconds').value) || 0;
    totalSeconds = mins * 60 + secs;
  }

  if (totalSeconds <= 0) return;

  isRunning = true;
  alertMsg.style.display = 'none';

  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      alertMsg.style.display = 'block';
      alertSound.play();
    } else {
      totalSeconds--;
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  totalSeconds = 0;
  updateDisplay();
  alertMsg.style.display = 'none';
}

updateDisplay();

// PWA Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
