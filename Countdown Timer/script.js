let totalSeconds = 0;
let countdownInterval;
let isPaused = false;

const alertSound = document.getElementById('alert-sound');
const transitionSound = document.getElementById('transition-sound');

function startTimer() {
  const days = parseInt(document.getElementById('days').value) || 0;
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;
  totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds <= 0) return;

  document.getElementById('main-screen').style.display = 'none';
  document.getElementById('transition-screen').style.display = 'flex';

  updateBigCountdown(totalSeconds);
  countdownInterval = setInterval(runCountdown, 1000);
}

function runCountdown() {
  if (!isPaused) {
    totalSeconds--;
    if (totalSeconds > 0) {
      updateBigCountdown(totalSeconds);
      transitionSound.currentTime = 0;
      transitionSound.play().catch(() => {});
    } else {
      clearInterval(countdownInterval);
      
      // Stop transition sound
      transitionSound.pause();
      transitionSound.currentTime = 0;

      alertSound.play().catch(() => {});
      document.getElementById('transition-screen').style.display = 'none';
      document.getElementById('end-screen').style.display = 'flex';
    }
  }
}


function pauseTimer() {
  isPaused = !isPaused;
  document.querySelector('.pause').textContent = isPaused ? "Resume" : "Pause";
}

function resetTimer() {
  clearInterval(countdownInterval);
  totalSeconds = 0;
  isPaused = false;
  goToStart();
}

function updateBigCountdown(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  document.getElementById('countdown-number').textContent =
    `${String(d).padStart(2, '0')}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
}

function goToStart() {
  document.getElementById('end-screen').style.display = 'none';
  document.getElementById('transition-screen').style.display = 'none';
  document.getElementById('main-screen').style.display = 'flex';
  document.querySelector('.pause').textContent = "Pause";
}

