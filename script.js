//START OF MICHAEL SECTION
// Array of emojis to display
//"🤖","👾","🕾", "🖳", "⌨","Curtis Colemen", "Byron Newberry", "Pat Smith",
//"Daniel Griffin", "Robert Nix",
//"David North", "Don Leftwich", "Fang Li"
//, "🛡️", "֎", "👾", "💼", "</>",  "🖥", "🖨", "🖱", "🖲", "⚛", "♘"

//HOME PAGE
const emojis = ["Computer Science", "Cyber Security", "AI", "Games", "Business", "Coding"];
let emojiIndex = 0;

// Function to change the emoji
function changeEmoji() {
    const container = document.getElementById('emoji-container');
    // Update the content of the container with the current emoji
    container.textContent = emojis[emojiIndex];
    // Update the index to point to the next emoji
    emojiIndex = (emojiIndex + 1) % emojis.length;
}

// Change emoji every 2 seconds (2000 milliseconds)
setInterval(changeEmoji, 1000);

//FAQ PAGE
const faqWords = ["Questions", "Answers",  "Challenges", "Clarification", "Exploration", "Discovery", "Examination","Investigation", "Solutions", "RATS"];
let faqIndex = 0;

// Function to change the faq words
function changeFaqWords() {
    const container = document.getElementById('faq-word-container');

    // Update the content of the container with the current emoji
    container.textContent = faqWords[faqIndex];
    // Update the index to point to the next emoji
    faqIndex = (faqIndex + 1) % faqWords.length;
}

// Change words every 2 seconds (2000 milliseconds)
setInterval(changeFaqWords, 1000);

// accordian stuff
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;

      // Toggle current section
      content.style.display = content.style.display === 'block' ? 'none' : 'block';

      // Optionally, close other sections
      headers.forEach(otherHeader => {
        if (otherHeader !== this) {
          otherHeader.nextElementSibling.style.display = 'none';
        }
      });
    });
  });
});
//END OF MICHAEL SECTION