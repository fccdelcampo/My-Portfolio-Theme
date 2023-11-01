document.addEventListener("DOMContentLoaded", function() {
    var textContainer = document.getElementById("encoded-text");
    var encodedTexts = ["Computer Science Major!", "Novice Programmer!", "Science Enthusiast!"];
    var currentText = "I am a ";
    var currentIndex = 0;
    var isTyping = true;
    var textIndex = 0;
    var cursorVisible = true;

    function updateText() {
        textContainer.textContent = currentText;
        if (isTyping) {
            if (textIndex < encodedTexts[currentIndex].length) {
                currentText += encodedTexts[currentIndex][textIndex];
                textIndex++;
                setTimeout(updateText, 150); // Slower typing speed (adjust as needed)
            } else {
                isTyping = false;
                setTimeout(backspaceText, 1000); // Delay before backspacing
            }
        } else {
            if (textIndex > 0) {
                currentText = currentText.slice(0, -1);
                textIndex--;
                setTimeout(updateText, 50); // Slower backspacing speed (adjust as needed)
            } else {
                isTyping = true;
                currentIndex = (currentIndex + 1) % encodedTexts.length;
                setTimeout(updateText, 1000); // Delay before typing the next string
            }
        }
    }

    function backspaceText() {
        isTyping = false;
        setTimeout(updateText, 0); // No delay before backspacing
    }

    function toggleCursor() {
        var cursor = document.querySelector(".cursor");
        cursor.style.visibility = cursorVisible ? "hidden" : "visible";
        cursorVisible = !cursorVisible;
        setTimeout(toggleCursor, 500); // Blinking speed
    }

    updateText(); // Start immediately without delay
    toggleCursor();
});






















