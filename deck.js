const suits = [  { name: 'hearts', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/SuitHearts.svg' },  { name: 'diamonds', url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/SuitDiamonds.svg' },  { name: 'spades', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/SuitSpades.svg' },  { name: 'clubs', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/SuitClubs.svg' }];
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const deck = [];

// create a deck of cards
for (let suit of suits) {
  for (let value of values) {
    deck.push({
      suit: suit.name,
      value: value,
      suitUrl: suit.url
    });
  }
}

// shuffle the deck
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [deck[i], deck[j]] = [deck[j], deck[i]];
}

// display the shuffled deck
const deckContainer = document.getElementById("deck");
for (let i = 0; i < deck.length; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  
  let suitImage = document.createElement("img");
  suitImage.src = deck[i].suitUrl;
  card.appendChild(suitImage);
  
  let topLeft = document.createElement("div");
  topLeft.classList.add("top-left");
  topLeft.textContent = deck[i].value;
  card.appendChild(topLeft);
  
  let bottomRight = document.createElement("div");
  bottomRight.classList.add("bottom-right");
  bottomRight.textContent = deck[i].value;
  card.appendChild(bottomRight);
  
  deckContainer.appendChild(card);
}
