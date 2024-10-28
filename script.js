// Typing Animation
const textArray = ["Data Analyst", "Network Engineer", "Cloud Enthusiast"];
let typingText = document.querySelector(".typing-text");
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Modal Functionality
function openModal(projectId) {
    document.getElementById(`${projectId}-modal`).style.display = "flex";
}

function closeModal(projectId) {
    document.getElementById(`${projectId}-modal`).style.display = "none";
}
