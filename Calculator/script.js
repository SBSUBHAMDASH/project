const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn:not(.sci):not(.mem)');
const sciButtons = document.querySelectorAll('.btn.sci');
const memButtons = document.querySelectorAll('.btn.mem');
let currentInput = '';
let memory = 0;
let isMuted = false;

const clickSound = document.getElementById('clickSound');
const errorSound = document.getElementById('errorSound');

function playSound(type) {
  if (!isMuted) {
    (type === 'click' ? clickSound : errorSound).play();
  }
}

buttons.forEach(btn => {
  btn.onclick = () => {
    const val = btn.textContent;
    playSound('click');
    if (val === '=') {
      try {
        currentInput = eval(currentInput.replace(/\^/g, '**')).toString();
      } catch {
        currentInput = 'Error';
        playSound('error');
      }
    } else {
      currentInput += val;
    }
    display.textContent = currentInput || '0';
  };
});

sciButtons.forEach(btn => {
  btn.onclick = () => {
    playSound('click');
    const op = btn.textContent;
    try {
      if (op === 'π') currentInput += Math.PI.toFixed(8);
      else if (op === 'e') currentInput += Math.E.toFixed(8);
      else if (op === '√') currentInput = Math.sqrt(eval(currentInput)).toString();
      else if (op === 'x²') currentInput = Math.pow(eval(currentInput), 2).toString();
      else if (op === 'log') currentInput = Math.log10(eval(currentInput)).toString();
      else if (op === 'sin') currentInput = Math.sin(eval(currentInput) * Math.PI / 180).toString();
      else if (op === 'cos') currentInput = Math.cos(eval(currentInput) * Math.PI / 180).toString();
      else if (op === '⌫') currentInput = currentInput.slice(0, -1);
      else if (op === 'C') currentInput = '';
    } catch {
      currentInput = 'Error';
      playSound('error');
    }
    display.textContent = currentInput || '0';
  };
});

memButtons.forEach(btn => {
  btn.onclick = () => {
    playSound('click');
    const op = btn.textContent;
    if (op === 'MC') memory = 0;
    else if (op === 'MR') currentInput += memory.toString();
    else if (op === 'M+') memory += Number(eval(currentInput) || 0);
    display.textContent = currentInput || '0';
  };
});

document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('light');
    const btn = document.getElementById('themeToggle');
  btn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
};
document.getElementById('muteToggle').onclick = () => {
  isMuted = !isMuted;
  document.getElementById('muteToggle').textContent = isMuted ? '🔇' : '🔊';
};
document.getElementById('toggleMode').onclick = () => {
  document.getElementById('calculator').classList.toggle('hidden');
  document.getElementById('converter').classList.toggle('hidden');
};
