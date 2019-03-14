
document.addEventListener('DOMContentLoaded', function(){

// const variables - hold all html elements that are being used in the game;

const   movesCounterElement = document.querySelector('span.moves'),
        starRating = document.querySelector('ul.stars'),
        timerDisplay = document.querySelector('span.timer'),
        victoryPopup = document.querySelector('div.winner'),
        victoryPopupTimeDisplay = document.querySelector('span.gametime'),
        victoryPopupStarRating =document.querySelector('ul.rating'),
        restartInPopup = document.querySelector('#play-again'),
        closePopup = document.querySelector('#no-thanks'),
        restart = document.querySelector('div.restart');
         

// let variables hold all supporting variables;
let deck = document.querySelector('ul.deck'),
    movesCounter = 0,
    clickCounter = 0,
    openedCards = [],
    matchesList = [];
    

// function init initializes all compnenets needed to start the game
function init() {
    deckControl.createDeck();
    boardHandlers();
    scoreBoard.createRating();
    gamePlayControl();
};

// function restartGame control the restart process, whereever it's initialized at
function restartGame() {
    clickCounter = 0;
    matchesList = [];
    deckControl.clearBoard();
    deckControl.createDeck();

    scoreBoard.createRating();
    timer.stopTimer();
    timer.resetTimer();
    scoreBoard.resetMoves();

}

// function boardHandlers gathers up all event listeners needed to restart the game
function boardHandlers() {

restart.addEventListener('click', function() {
    restartGame();
    });

closePopup.addEventListener('click', function() {
    hidePopup();
    });

restartInPopup.addEventListener('click', function() {
    hidePopup();
    restartGame();
    });

}

// function that controls all the gameplay

function gamePlayControl() {
    
            deck.addEventListener('click', function(e){

                if (e.target.classList.contains('card') && e.target.classList.contains('match') === false) { // checks if the card was clicked and if it wasn't a match
                    clickCounter++;
                    if (clickCounter === 1) { // counts clicks so the timer would only start on the first click when user starts playing
                    timer.startTimer(); 
                    }
                    e.target.classList.add('open', 'show');  //adds .open and .show to the clicked element
                    openedCards.push(e.target.firstElementChild); // pushes the card to a temporary array of opened elements
                    if (openedCards.length === 2) { // checks if 2 cards were opened
                    movesCounter += 1; // increases number of moves
                    scoreBoard.setRating(); // sets rating (fades the stars while moves counter increases)
                    movesCounterElement.innerText = movesCounter; // displays number of moves on the page

                        // compares two cards in the list of opened cards
                        if (JSON.stringify(openedCards[0].classList) == JSON.stringify(openedCards[1].classList)) {
                            matchMaker(); // if match - calls the matchMaker function
                        }
                        else {                           
                            setTimeout( function() { hideAll() }, 300);  //if no match - hides all the cards after 0.3s
                        }
                    }
                     
                }

            });
            // addes class .match and removes .show and .open
        function matchMaker() {
            openedCards[0].parentElement.classList.add('match');
            openedCards[0].parentElement.classList.remove('open', 'show');
            openedCards[1].parentElement.classList.add('match');
            openedCards[1].parentElement.classList.remove('open', 'show');


            matchesList.push(openedCards);
              
             //stores the match on matches list array
            openedCards =[]; // cleans opened cards array
                if (matchesList.length === 8) { //checks if number of matches is 8, if true initiates you win function
                    youWin();
                }

        };
        // hides all cards if there is no match
        function hideAll() {
            openedCards[0].parentElement.classList.remove('open', 'show');
            openedCards[1].parentElement.classList.remove('open', 'show');
            openedCards = [];
        }
        // function you win diaplys vistory pop-up, stops timer, resets timer
        function youWin() {
            openedCards = [];
            matchesList = [];
            displayPopup();
            timer.stopTimer();
            timer.resetTimer();

        }       
}


const scoreBoard = {
    createRating: function() {
    starRating.innerHTML = '';
        for (let i = 0; i < 3; i++ ) {
        let starElement = document.createElement('i'),
            starListElement = document.createElement('li');
        starElement.classList.add('fa', 'fa-star');
        starListElement.appendChild(starElement);
        starRating.appendChild(starListElement);
        }
    },
    resetMoves: function() {
        movesCounter = 0;
        movesCounterElement.innerText = '0';
    },
    setRating: function() {
        if (movesCounter === 12) {
                starRating.removeChild(starRating.lastElementChild);
        }
        if (movesCounter === 18) {
                starRating.removeChild(starRating.lastElementChild);
        } 
    }

}


//  object timer - contains all timer methods

const timer = {
    startTime: 0,
    playTime: 0,
    startTimer: function() {
        let self = this;
        self.playTime = setInterval( function(){ 
            self.displayTime();
        }, 1000)
    },
    stopTimer: function() { clearInterval(timer.playTime)},
    displayTime: function() { 
        timer.startTime++;
        function millisToMinutesAndSeconds(secs) {
            let minutes = Math.floor(secs / 60);
            let seconds = (secs%60).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
        timerDisplay.innerText = millisToMinutesAndSeconds(timer.startTime);
    },
    resetTimer: function() {
            timer.startTime = 0;
            timerDisplay.innerText = '0:00';
    }
}


// Object deckControl contains all methods neccessary to create or clear board elements


const deckControl = {
    symbolList : [  'fa-diamond',
                    'fa-paper-plane-o',
                    'fa-anchor',
                    'fa-bolt',
                    'fa-cube',
                    'fa-leaf',
                    'fa-bicycle',
                    'fa-bomb',
                    'fa-diamond',
                    'fa-paper-plane-o',
                    'fa-anchor',
                    'fa-bolt',
                    'fa-cube',
                    'fa-leaf',
                    'fa-bicycle',
                    'fa-bomb'
                ],
    createDeck: function() {
        shuffle(this.symbolList);
        for (let i = 0; i < this.symbolList.length; i++) {
        this.createNewCard(this.symbolList[i]);
        }
    },
    createNewCard: function(randomClass) {
        let newCard = document.createElement('li'),
            cardInterior = document.createElement('i');
            cardInterior.classList.add('fa');
            cardInterior.classList.add(randomClass);
            newCard.classList.add('card');
            newCard.appendChild(cardInterior);
            deck.appendChild(newCard);
    },

    clearBoard: function() {
        deck.innerHTML = ''
    }

}


function displayPopup() {
    victoryPopupTimeDisplay.innerText = timerDisplay.innerText;
    victoryPopupStarRating.innerHTML = starRating.innerHTML;
    victoryPopupStarRating.classList.add('stars');
    victoryPopup.classList.remove('hidden');
    }

function hidePopup() {
    victoryPopup.classList.add('hidden');
}

// Shuffle function from http://stackoverflow.com/a/2450976

	function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
	}


    init();
 });
