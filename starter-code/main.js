console.log("JS file is connected to HTML! Woo!")
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

// if (cardTwo===cardFour) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');
// }

// if (cardOne===cardTwo) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');
// }

// if (cardOne===cardThree) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');
// }

// if (cardOne===cardFour) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');
// }

// if (cardTwo===cardThree) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');
// }

// if (cardThree===cardFour) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');
// }
var gameboard=document.getElementById('game-board');  // find the board and set it to a variable
var listIterms=document.getElementsByTagName('li');  //create list for function to loop
var createBoard=function() {                           // function that will create game board
    for (var i=0; i<listIterms.length; i++) {   // loop through cards array to create card elements for game board
    	var newCard=document.createElement('div');   // create a div element which will be used as a card
        newCard.className='card';      // add a class to the card element which will help link styling
	    gameboard.appendChild(newCard); // append the card to the board
    }
};
