const maxChars = 160;

const tweetInput = document.getElementById("tweetInput");
const charCount = document.getElementById("charCount");
const tweetButton = document.getElementById("tweetButton");

tweetInput.addEventListener("input", function () {

    let remaining = maxChars - tweetInput.value.length;

    if (remaining < 0) {
        charCount.textContent = "Character limit exceeded!";
        tweetButton.disabled = true;
    } else {
        charCount.textContent = remaining + " characters remaining";
        tweetButton.disabled = false;
    }


});
