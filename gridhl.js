const gridItems = document.querySelectorAll(".card");

gridItems.forEach(item => {
  item.addEventListener("mouseenter", function() {
    // Get the current item's index in the grid
    const index = Array.from(gridItems).indexOf(this);
    // Highlight the current item and the items to the left and right
	function getCardValues(card) {
		var value = 0; //score
		if (card.classList.contains("hearts")) {
		  value += 5;
		}
		else if (card.classList.contains("diamonds")) {
		  value += 4;
		}
		else if (card.classList.contains("spades")) {
		  value += 2;
		}
		else if (card.classList.contains("clubs")) {
			value += 1;
		}
		if (card.classList.contains("Q") || card.classList.contains("A") || card.classList.contains("K")) {
		  value += 1;
		  value *= 2;
		}
		if (card.classList.contains("J")) {value *= 0.5};
		if (card.classList.contains("5")) {value + 1};
		if (card.classList.contains("6")) {value + 1};
		if (card.classList.contains("7")) {value + 2};
		if (card.classList.contains("8")) {value + 2};
		if (card.classList.contains("9")) {value + 3};
		if (card.classList.contains("10")) {value + 4};
		value = Math.floor(value);
		return value;
	}
    this.classList.add("highlighted");
	var center = getCardValues(gridItems[index]);
	//console.log(center);
    if (index > 0) {
      gridItems[index - 1].classList.add("highlighted");
	  var left = getCardValues(gridItems[index - 1]);
	  //console.log(left);
    }
    if (index < gridItems.length - 1) {
      gridItems[index + 1].classList.add("highlighted");
	  var right = getCardValues(gridItems[index + 1]);
	  //console.log(right);
    }
	var tval = center + left + right;
	console.log(tval);
  });

  item.addEventListener("mouseleave", function() {
    // Remove the highlight when the mouse leaves the item
    this.classList.remove("highlighted");
    const index = Array.from(gridItems).indexOf(this);
    if (index > 0) {
      gridItems[index - 1].classList.remove("highlighted");
    }
    if (index < gridItems.length - 1) {
      gridItems[index + 1].classList.remove("highlighted");
    }
  });
});