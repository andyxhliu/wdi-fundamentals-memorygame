var cards=['queen', 'queen', 'king', 'king'];
var cardsInPlay=[];  //Create a empty array
var gameboard=document.getElementById('game-board');  // find the board div and set it to a variable
var createBoard=function() {                           // to create a function for game board
    for (var i=0; i<cards.length; i++) {   // loop through cards array to create card  for game board
    	var newCard=document.createElement('div');   // create a div to accomodate the card
        newCard.className='card';      // to style the new card by assigning class element
	    gameboard.appendChild(newCard); // append the card to the board
	    newCard.setAttribute('data-card',cards[i]);// set the card's 'data-card' to be the element of the array
	    newCard.addEventListener('click', isTwoCards); // when a card is clicked the function isTwoCards will be executed
    }
};

var isMatch=function(cards) { //to test if two cards in play are a match.
	if (cards[0]===cards[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
};

var isTwoCards=function() {   //to test if there are cards in play
	cardsInPlay.push(this.getAttribute('data-card')); // add card to array of cards in play
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')==='king') { // to decide which image to use using an if statement.
		this.innerHTML='<img src="images/king.png" alt="King of Spades" />';
	} else {
		this.innerHTML='<img src="images/queen.png" alt="queen of Spades" />';
	}
	if (cardsInPlay.length===2) { // if you have two cards in play check for a match
		isMatch(cardsInPlay); // pass the cardsInPlay as an argument to isMatch function
		cardsInPlay=[]; // clear cards in play array for next try
	}
};

createBoard();














