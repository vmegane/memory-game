/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // const variables - hold all html elements that are being used in the game;\n  var movesCounterElement = document.querySelector('span.moves'),\n      starRating = document.querySelector('ul.stars'),\n      timerDisplay = document.querySelector('span.timer'),\n      victoryPopup = document.querySelector('div.winner'),\n      victoryPopupTimeDisplay = document.querySelector('span.gametime'),\n      victoryPopupStarRating = document.querySelector('ul.rating'),\n      restartInPopup = document.querySelector('#play-again'),\n      closePopup = document.querySelector('#no-thanks'),\n      restart = document.querySelector('div.restart'); // let variables hold all supporting variables;\n\n  var deck = document.querySelector('ul.deck'),\n      movesCounter = 0,\n      clickCounter = 0,\n      openedCards = [],\n      matchesList = []; // function init initializes all compnenets needed to start the game\n\n  function init() {\n    deckControl.createDeck();\n    boardHandlers();\n    scoreBoard.createRating();\n    gamePlayControl();\n  }\n\n  ; // function restartGame control the restart process, whereever it's initialized at\n\n  function restartGame() {\n    clickCounter = 0;\n    matchesList = [];\n    deckControl.clearBoard();\n    deckControl.createDeck();\n    scoreBoard.createRating();\n    timer.stopTimer();\n    timer.resetTimer();\n    scoreBoard.resetMoves();\n  } // function boardHandlers gathers up all event listeners needed to restart the game\n\n\n  function boardHandlers() {\n    restart.addEventListener('click', function () {\n      restartGame();\n    });\n    closePopup.addEventListener('click', function () {\n      hidePopup();\n    });\n    restartInPopup.addEventListener('click', function () {\n      hidePopup();\n      restartGame();\n    });\n  } // function that controls all the gameplay\n\n\n  function gamePlayControl() {\n    deck.addEventListener('click', function (e) {\n      if (e.target.classList.contains('card') && e.target.classList.contains('match') === false) {\n        // checks if the card was clicked and if it wasn't a match\n        clickCounter++;\n\n        if (clickCounter === 1) {\n          // counts clicks so the timer would only start on the first click when user starts playing\n          timer.startTimer();\n        }\n\n        e.target.classList.add('open', 'show'); //adds .open and .show to the clicked element\n\n        openedCards.push(e.target.firstElementChild); // pushes the card to a temporary array of opened elements\n\n        if (openedCards.length === 2) {\n          // checks if 2 cards were opened\n          movesCounter += 1; // increases number of moves\n\n          scoreBoard.setRating(); // sets rating (fades the stars while moves counter increases)\n\n          movesCounterElement.innerText = movesCounter; // displays number of moves on the page\n          // compares two cards in the list of opened cards\n\n          if (JSON.stringify(openedCards[0].classList) == JSON.stringify(openedCards[1].classList)) {\n            matchMaker(); // if match - calls the matchMaker function\n          } else {\n            setTimeout(function () {\n              hideAll();\n            }, 300); //if no match - hides all the cards after 0.3s\n          }\n        }\n      }\n    }); // addes class .match and removes .show and .open\n\n    function matchMaker() {\n      openedCards[0].parentElement.classList.add('match');\n      openedCards[0].parentElement.classList.remove('open', 'show');\n      openedCards[1].parentElement.classList.add('match');\n      openedCards[1].parentElement.classList.remove('open', 'show');\n      matchesList.push(openedCards); //stores the match on matches list array\n\n      openedCards = []; // cleans opened cards array\n\n      if (matchesList.length === 8) {\n        //checks if number of matches is 8, if true initiates you win function\n        youWin();\n      }\n    }\n\n    ; // hides all cards if there is no match\n\n    function hideAll() {\n      openedCards[0].parentElement.classList.remove('open', 'show');\n      openedCards[1].parentElement.classList.remove('open', 'show');\n      openedCards = [];\n    } // function you win diaplys vistory pop-up, stops timer, resets timer\n\n\n    function youWin() {\n      openedCards = [];\n      matchesList = [];\n      displayPopup();\n      timer.stopTimer();\n      timer.resetTimer();\n    }\n  }\n\n  var scoreBoard = {\n    createRating: function createRating() {\n      starRating.innerHTML = '';\n\n      for (var i = 0; i < 3; i++) {\n        var starElement = document.createElement('i'),\n            starListElement = document.createElement('li');\n        starElement.classList.add('fa', 'fa-star');\n        starListElement.appendChild(starElement);\n        starRating.appendChild(starListElement);\n      }\n    },\n    resetMoves: function resetMoves() {\n      movesCounter = 0;\n      movesCounterElement.innerText = '0';\n    },\n    setRating: function setRating() {\n      if (movesCounter === 12) {\n        starRating.removeChild(starRating.lastElementChild);\n      }\n\n      if (movesCounter === 18) {\n        starRating.removeChild(starRating.lastElementChild);\n      }\n    } //  object timer - contains all timer methods\n\n  };\n  var timer = {\n    startTime: 0,\n    playTime: 0,\n    startTimer: function startTimer() {\n      var self = this;\n      self.playTime = setInterval(function () {\n        self.displayTime();\n      }, 1000);\n    },\n    stopTimer: function stopTimer() {\n      clearInterval(timer.playTime);\n    },\n    displayTime: function displayTime() {\n      timer.startTime++;\n\n      function millisToMinutesAndSeconds(secs) {\n        var minutes = Math.floor(secs / 60);\n        var seconds = (secs % 60).toFixed(0);\n        return minutes + \":\" + (seconds < 10 ? '0' : '') + seconds;\n      }\n\n      timerDisplay.innerText = millisToMinutesAndSeconds(timer.startTime);\n    },\n    resetTimer: function resetTimer() {\n      timer.startTime = 0;\n      timerDisplay.innerText = '0:00';\n    } // Object deckControl contains all methods neccessary to create or clear board elements\n\n  };\n  var deckControl = {\n    symbolList: ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'],\n    createDeck: function createDeck() {\n      shuffle(this.symbolList);\n\n      for (var i = 0; i < this.symbolList.length; i++) {\n        this.createNewCard(this.symbolList[i]);\n      }\n    },\n    createNewCard: function createNewCard(randomClass) {\n      var newCard = document.createElement('li'),\n          cardInterior = document.createElement('i');\n      cardInterior.classList.add('fa');\n      cardInterior.classList.add(randomClass);\n      newCard.classList.add('card');\n      newCard.appendChild(cardInterior);\n      deck.appendChild(newCard);\n    },\n    clearBoard: function clearBoard() {\n      deck.innerHTML = '';\n    }\n  };\n\n  function displayPopup() {\n    victoryPopupTimeDisplay.innerText = timerDisplay.innerText;\n    victoryPopupStarRating.innerHTML = starRating.innerHTML;\n    victoryPopupStarRating.classList.add('stars');\n    victoryPopup.classList.remove('hidden');\n  }\n\n  function hidePopup() {\n    victoryPopup.classList.add('hidden');\n  } // Shuffle function from http://stackoverflow.com/a/2450976\n\n\n  function shuffle(array) {\n    var currentIndex = array.length,\n        temporaryValue,\n        randomIndex;\n\n    while (currentIndex !== 0) {\n      randomIndex = Math.floor(Math.random() * currentIndex);\n      currentIndex -= 1;\n      temporaryValue = array[currentIndex];\n      array[currentIndex] = array[randomIndex];\n      array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n  }\n\n  init();\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });