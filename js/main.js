var cards = [

{
 rank: "queen",
 suit: "hearts",  
 cardImage: "images/queen-of-hearts.png" 
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"

}

];


//create array
var cardsInPlay = [];



//create function to check for match
var checkForMatch = function () {
//check to see if two cards match
	  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }

};


//create function to represent user flipping card
var flipCard = function () {
//get data-id of card flipped
var cardId = this.getAttribute('data-id');
console.log(cardId)

//add rank to array of cards that are in play
cardsInPlay.push(cards[cardId].rank);
//display cards face image
  this.setAttribute('src', cards[cardId].cardImage);
//check to see if two cards have been played
if (cardsInPlay.length ===2) {
//if so call checkForMatch
checkForMatch();

//empty cards in play array for next try
cardsInPlay = []

}
};



//function to create board
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
//img element used as card
 var cardElement = document.createElement('img');
 //set src attribute to display back of the card
 cardElement.setAttribute('src', 'images/back.png');
 //store data
 cardElement.setAttribute('data-id', i);
//add an event listener of click
 cardElement.addEventListener('click', flipCard);
//append card to game
 document.getElementById('game-board').appendChild(cardElement);

  }

};


createBoard();







