const stories = [
  {
    image: "sad_ice_cream.png",
    caption: "A child drops their ice cream...",
    correct: "😢",
    options: ["😢", "😊", "😠"]
  },
  {
    image: "happy_dog.png",
    caption: "A puppy jumps into their owner's arms!",
    correct: "😊",
    options: ["😢", "😊", "😲"]
  },
  {
    image: "angry_toy_broken.png",
    caption: "Someone breaks your favorite toy on purpose...",
    correct: "😠",
    options: ["😠", "😊", "😴"]
  }
];

let currentStoryIndex = 0;
let wrongAttempts = 0;
const maxAttempts = 3;

function showStory(index) {
  const story = stories[index];
  document.getElementById("story-image").src = story.image;
  document.getElementById("caption").textContent = story.caption;
  const emojiContainer = document.getElementById("emoji-buttons");
  emojiContainer.innerHTML = "";
  story.options
    .sort(() => Math.random() - 0.5)
    .forEach(emoji => {
      const btn = document.createElement("button");
      btn.textContent = emoji;
      btn.onclick = () => validateEmotion(emoji, story.correct);
      emojiContainer.appendChild(btn);
    });

  document.getElementById("result").textContent = "";
  document.getElementById("next-button").style.display = "none";
}

function validateEmotion(selected, correct) {
  const result = document.getElementById("result");

  if (selected === correct) {
    result.textContent = "✅ Verified as human!";
    result.style.color = "green";
    document.getElementById("next-button").style.display = "inline-block";
    hideTryAgain();
  } else {
    wrongAttempts++;
    result.textContent = `❌ Wrong! Attempts left: ${maxAttempts - wrongAttempts}`;
    result.style.color = "red";
    document.getElementById("next-button").style.display = "none";

    if (wrongAttempts >= maxAttempts) {
      endAsRobot();
    } else {
      showTryAgain();
    }
  }
}

function nextStory() {
  currentStoryIndex++;
  if (currentStoryIndex < stories.length) {
    showStory(currentStoryIndex);
  } else {
    document.querySelector(".captcha-card").innerHTML = `
      <h1>🎉 You're human. Thanks!</h1>
      <h1><p>You’ve completed the Emotion CAPTCHA.</p></h1>
      <button class="main-btn" onclick="goToMain()">Home</button>
      <button class="blank-btn" onclick="location.href='../index.html'">Main</button>
    `;
  }
}

function goToMain() {
  currentStoryIndex = 0;
  wrongAttempts = 0;
  document.querySelector(".captcha-card").innerHTML = `
    <h1>React like a human 😊</h1>
    <div id="image-story">
      <img id="story-image" src="" alt="Emotion Story" />
      <p id="caption" class="caption"></p>
    </div>
    <div class="emoji-options" id="emoji-buttons"></div>
    <p id="result"></p>
    <button id="next-button" onclick="nextStory()" style="display: none;">Next</button>
    <div id="try-again-container"></div>
  `;
  showStory(currentStoryIndex);
}

function showTryAgain() {
  const container = document.getElementById("try-again-container");
  container.innerHTML = `<button onclick="showStory(${currentStoryIndex})">Try Again</button>`;
}

function hideTryAgain() {
  const container = document.getElementById("try-again-container");
  container.innerHTML = "";
}

function endAsRobot() {
  document.querySelector(".captcha-card").innerHTML = `
    <h1>🤖 You are a robot</h1>
   <h1> <p>Access denied. Please leave.</p></h1>
  `;
}

window.onload = () => {
  showStory(currentStoryIndex);
};
