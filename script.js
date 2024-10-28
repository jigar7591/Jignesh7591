// Typing Animation
const textArray = ["Data Analyst", "Network Engineer", "Cloud Enthusiast"];
let typingText = document.querySelector(".typing-text");
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(char
