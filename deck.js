const suits = [  { name: 'hearts', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/SuitHearts.svg', read: 'Hearts is a strong suit. A high concentration of hearts cards together indicates strength and forecasts an obstacle (ཆོས་རྒྱལ)  may come for you soon. If this card is bordered by two cards of the spades suit, this is a good omen.\n紅心是一個強大的花色。這些牌預測了一個障礙。這兩張牌是一個好兆頭。'},  { name: 'diamonds', url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/SuitDiamonds.svg', read: 'Diamonds is a materialistic suit. A high concentration of these cards together indicates a high level of selfishness (གཞི་བཞིན་སྐུ་གསོལ་) which can be difficult for one to resolve within themselves through peaceful means. If this card is bordered by two cards of the clubs suit, this is a bad omen.\n鑽石是一種物質主義的花色。如果這張牌被條紋花色的兩張牌邊框，這是一個不好的兆頭。' },  { name: 'spades', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/SuitSpades.svg', read: 'Spades is a neutral suit. A high concentration of these can signal challenges (རྒྱུང་གྲུབ) ahead within your own skull (རིག་སྒྲགས) or near your home. Cards of this suit being present near strong suit cards will only negatively affect the reading.\n黑桃是一種中性花色。這些牌的高濃度可以預示腦內或家中面臨挑戰的信號。這種花色的牌靠近強烈的花色牌只會對閱讀造成負面影響。' },  { name: 'clubs', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/SuitClubs.svg', read: 'Clubs is a strong negative suit. A large cluster of these cards (མེད་པར་གྲུབ) is a very bad omen and should make one reconsider their actions. If two of these cards surround another strong suit card, their energies (གནས་རྗེ་ཁྱབས) will clash.\n梅花是一種強烈的負面花色。這些牌的大量集中是一個非常不好的預兆，應該讓人重新考慮自己的行動。引起矛盾的能量。' }];
const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const deck = [];

// create a deck of cards
for (let suit of suits) {
  for (let value of values) {
    deck.push({
      suit: suit.name,
      value: value,
      suitUrl: suit.url,
	  suitInt: suit.read
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
  card.classList.add(deck[i].suit);
  card.classList.add(deck[i].value);
  card.title = `${deck[i].value} of ${deck[i].suit}: \n${deck[i].suitInt}`;
  
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