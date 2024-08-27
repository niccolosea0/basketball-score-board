let homeStoreEl = document.getElementById("home-score")

let homeScore = 0 ;

function increaseHomeScreenOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
    console.log("button-clicked")
}

function increaseHomeScreenTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
    console.log("button-clicked")
}

function increaseHomeScreenThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
    console.log("button-clicked")
}

let guestStoreEl = document.getElementById("guest-score")

let guestScore = 0

function increaseGuestScreenOne() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
    console.log("button-clicked")
}

function increaseGuestScreenTwo() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
    console.log("button-clicked")
}

function increaseGuestScreenThree() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
    console.log("button-clicked");
}
function newGame() {
    homeStoreEl.textContent = 0
    guestStoreEl.textContent = 0
}