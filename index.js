let homeScore = document.getElementById("home-score")
let homescore = 0; 
let guestScore = document.getElementById("guest-score")
let guestscore = 0;

function homeScoreOne() {
    homescore += 1
    homeScore.textContent = homescore 
}

function homeScoreTwo() {
    homescore += 2
    homeScore.textContent = homescore 
}

function homeScoreThree() {
    homescore += 3
    homeScore.textContent = homescore 
}

function guestScoreOne() {
    guestscore += 1 
    guestScore.textContent = guestscore
}

function guestScoreTwo() {
    guestscore += 2 
    guestScore.textContent = guestscore
}

function guestScoreThree() {
    guestscore += 3 
    guestScore.textContent = guestscore
}

function newGame() {
    homescore = 0
    homeScore.textContent = 0
    guestscore = 0 
    guestScore.textContent = 0
}