const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg',
    },
    {
        name: 'fries',
        img: 'images/fries.jpg',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const messageDisplay = document.querySelector('#message')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
messageDisplay.textContent = 'Make a guess!'
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        messageDisplay.textContent = 'You have clicked the same image!'
     //   alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        messageDisplay.textContent = 'You found a match!'
      //  alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        messageDisplay.textContent = 'Sorry try again!'
      //  alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
        cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}





