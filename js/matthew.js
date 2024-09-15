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
setInterval(changeGetingStartedTitle, 1300); // Change emoji every 2 seconds (2000 milliseconds)



/*************************************************************************************************************** */
// SOFTWARE DEV PAGE
const dev_titles = ["Software Development", "Collaborations", "Reviews", "Innovations"];
let dev_titlesIndex = 0;

// Function to change the emoji
function changeSoftwareDevTitle() {
    const container = document.getElementById('software-dev-title-container');
    // Update the content of the container with the current emoji
    container.textContent = dev_titles[dev_titlesIndex];
    // Update the index to point to the next emoji
    dev_titlesIndex = (dev_titlesIndex + 1) % dev_titles.length;
}
setInterval(changeSoftwareDevTitle, 1300); // Change emoji every 2 seconds (2000 milliseconds)



/*************************************************************************************************************** */
// GAMING & ANIMATION PAGE
const ga_titles = ["Gaming & Animation", "Game Modeling", "Sound Design", "Puzzle Making"];
let ga_titlesIndex = 0;

// Function to change the emoji
function changGATitle() {
    const container = document.getElementById('ga-title-container');
    // Update the content of the container with the current emoji
    container.textContent = ga_titles[ga_titlesIndex];
    // Update the index to point to the next emoji
    ga_titlesIndex = (ga_titlesIndex + 1) % ga_titles.length;
}
setInterval(changGATitle, 1300); // Change emoji every 2 seconds (2000 milliseconds)




/*************************************************************************************************************** */
// CYBERSECURITY PAGE
const cyber_titles = ["Cybersecurity", "Hacking", "Protecting", "Analysis"];
let cyber_titlesIndex = 0;

// Function to change the emoji
function changeCyberDevTitle() {
    const container = document.getElementById('cybersecurity-title-container');
    // Update the content of the container with the current emoji
    container.textContent = cyber_titles[cyber_titlesIndex];
    // Update the index to point to the next emoji
    cyber_titlesIndex = (cyber_titlesIndex + 1) % cyber_titles.length;
}
setInterval(changeCyberDevTitle, 1300); // Change emoji every 2 seconds (2000 milliseconds)



/*************************************************************************************************************** */
// AI PAGE
const ai_titles = ["AI", "Automation", "Algorithms", "Research"];
let ai_titlesIndex = 0;

// Function to change the emoji
function changeAiTitle() {
    const container = document.getElementById('ai-title-container');
    // Update the content of the container with the current emoji
    container.textContent = ai_titles[ai_titlesIndex];
    // Update the index to point to the next emoji
    ai_titlesIndex = (ai_titlesIndex + 1) % ai_titles.length;
}
setInterval(changeAiTitle, 1300); // Change emoji every 2 seconds (2000 milliseconds)



/*************************************************************************************************************** */
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
setInterval(changeGetingStartedTitle, 1300); // Change emoji every 2 seconds (2000 milliseconds)




/*************************************************************************************************************** */
// ABOUT US PAGE
const team_titles = ["North's Favorite", "Best", "Fastest", "Most Successful", "Most Accomplished", "Funniest", "Coolest", "Most Fashionable", "Nicest", "Most Humble", "Most Passionate", "Most Loving", "Most Energetic"];
let team_titlesIndex = 0;

// Function to change the emoji
function changTeamTitle() {
    if(team_titlesIndex === 0){
        document.getElementById('changing_header').textContent = "Meet";
    }
    else{
        document.getElementById('changing_header').textContent = "Meet The";
    }
    const container = document.getElementById('team-title-container');
    // Update the content of the container with the current emoji
    container.textContent = team_titles[team_titlesIndex];
    // Update the index to point to the next emoji
    team_titlesIndex = (team_titlesIndex + 1) % team_titles.length;
    if(team_titlesIndex % team_titles.length === 0){
        team_titlesIndex = 0;
    }
}
setInterval(changTeamTitle, 1300); // Change emoji every 2 seconds (2000 milliseconds)


