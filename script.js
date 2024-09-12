// Array of emojis to display
//"🤖","👾","🕾", "🖳", "⌨","Curtis Colemen", "Byron Newberry", "Pat Smith",
//"Daniel Griffin", "Robert Nix",
//"David North", "Don Leftwich", "Fang Li"
//, "🛡️", "֎", "👾", "💼", "</>",  "🖥", "🖨", "🖱", "🖲", "⚛", "♘"
const emojis = ["Cyber Security", "AI", "Games", "Business", "Coding"];

let emojiIndex = 0;

// Function to change the emoji
function changeEmoji() {
    const container = document.getElementById('emoji-container');
    // Get a random emoji from the array
    //const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    // Update the content of the container
    //container.textContent = randomEmoji;

    // Update the content of the container with the current emoji
    container.textContent = emojis[emojiIndex];
    // Update the index to point to the next emoji
    emojiIndex = (emojiIndex + 1) % emojis.length;
}

// Change emoji every 2 seconds (2000 milliseconds)
setInterval(changeEmoji, 1000);
