//Navigating DOM
let startGame = document.getElementById("start-game-btn")
let newCard = document.getElementById("new-card-btn")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

//Defining Cards and Sum and Message etc.
let cards = []
let sum = 0
let message = ""
let isAlive = true
let hasBlackJack = false

//Random Cards
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 ) + 1;
    return randomCard;
}

function start() {
    let firstTime = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum === 21) {
        message = "You've got BlackJack"
        isAlive = false
        hasBlackJack = true
    }
    else if (sum < 21){
        message = "Do you want to pull a new card?"
        isAlive = true
        hasBlackJack = false
    }
    else {
        message = "You're out of the game!"
        isAlive = false
        hasBlackJack = true
    }

    messageEl.textContent = message
}


function getNewCard() {
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        sum += thirdCard
        renderGame()
    }
}
