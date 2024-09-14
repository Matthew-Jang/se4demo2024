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

//MEME PAGE
const MemeWords = ["m ","m|","me ","me|", "mem ", "mem|", "meme ","meme|","memes ", "memes|", 
"meme|", "meme ", "mem|", "mem ", "me|", "me ", "m|", "m ",
"j ", "j|", "jo ", "jo|", "jok ", "jok|", "joke ", "joke|", "jokes ", "jokes|",
"joke|", "joke ", "jok|", "jok ", "jo|", "jo ", "j|", "j ",   
 "g ", "g|", "go ", "go|", "goo ", "goo|", "goof ", "goof|", "goofs ", "goofs|",
"goof|", "goof ", "goo|", "goo ", "go|", "go ", "g|", "g ", 
"l ", "l|", "la ", "la|", "lau ", "lau|", "laug ", "laug|", "laugh ", "laugh|", "laughs ", "laughs|",
"laugh|", "laugh ", "laug|", "laug ", "lau|", "lau ", "la|", "la ", "l|", "l ",
"c ", "c|", "ca ", "ca|", "cat ", "cat|", "cats ", "cats|",
"cat|", "cat ", "ca|", "ca ", "c|", "c ",
 "【≽ܫ≼】"];
let MemeIndex = 0;

// Function to change the meme words
function changeMemeWords() {
    const container = document.getElementById('meme-container');

    // Update the content of the container with the current word
    container.textContent = MemeWords[MemeIndex];
    // Update the index to point to the next emoji
    MemeIndex = (MemeIndex + 1) % MemeWords.length;
}

// Change words every 2 seconds (2000 milliseconds)
setInterval(changeMemeWords, 125);

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
