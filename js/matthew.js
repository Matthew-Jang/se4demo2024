//GETTING STARTED PAGE
const titles = ["Computer Science", "Programming", "Problem Solving", "Debugging", "Coding"];
let titleIndex = 0;

// Function to change the emoji
function changeTitle() {
    const container = document.getElementById('title-container');
    // Update the content of the container with the current emoji
    container.textContent = titles[titleIndex];
    // Update the index to point to the next emoji
    titleIndex = (titleIndex + 1) % titles.length;
}

// Change emoji every 2 seconds (2000 milliseconds)
setInterval(changeTitle, 1300);
