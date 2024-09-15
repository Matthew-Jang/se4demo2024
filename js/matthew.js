//GETTING STARTED PAGE
const titles = ["Computer Science", "Programming", "Problem Solving", "Debugging", "Coding"];
let titleIndex = 0;

// Function to change the emoji
function changeGetingStartedTitle() {
    const container = document.getElementById('title-container');
    // Update the content of the container with the current emoji
    container.textContent = titles[titleIndex];
    // Update the index to point to the next emoji
    titleIndex = (titleIndex + 1) % titles.length;
}

// Change emoji every 2 seconds (2000 milliseconds)
setInterval(changeGetingStartedTitle, 1300);





/********************************************************* */
// A DAY IN THE LIFE PAGE
const day_titles = ["Collaborating", "Reviewing", "Problem Solving", "Debugging", "Coding"];
let day_titlesIndex = 0;

// Function to change the emoji
function changDayInTheLifeTitle() {
    const container = document.getElementById('day-in-the-life-title-container');
    // Update the content of the container with the current emoji
    container.textContent = day_titles[day_titlesIndex];
    // Update the index to point to the next emoji
    day_titlesIndex = (day_titlesIndex + 1) % day_titles.length;
}

// Change emoji every 2 seconds (2000 milliseconds)
setInterval(changDayInTheLifeTitle, 1300);