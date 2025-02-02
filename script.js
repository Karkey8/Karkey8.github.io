const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Fun text variations for the "No" button
const noTexts = [
  "Oops, missed me! 😜",
  "Too slow! 😂",
  "Catch me if you can!",
  "Nope, try again!",
  "You really wanna click me?",
  "Almost had me!",
  "Better luck next time!",
];

// Function to move the "No" button and change text
function moveNoButton() {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Generate random positions within bounds
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Apply new position
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Change button text randomly from the array
  noBtn.textContent = noTexts[Math.floor(Math.random() * noTexts.length)];
}

// Track if the mouseover has occurred
let mouseMoved = false;

// Change the text and start moving the button on the first mouseover
noBtn.addEventListener("mouseover", () => {
  if (!mouseMoved) {
    noBtn.textContent = noTexts[Math.floor(Math.random() * noTexts.length)]; // Change text
    mouseMoved = true; // Flag that the mouseover has occurred
  }
  moveNoButton(); // Move the button every time it's hovered over
});

// Move the "No" button on page load for a fun effect
window.onload = () => {
  noBtn.textContent = "No"; // Display just "No" when the page loads
};

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "Your ‘Yes’ has been received. Now let’s make memories! ❤️";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

  // Hide the No button
  noBtn.style.display = "none";
});
