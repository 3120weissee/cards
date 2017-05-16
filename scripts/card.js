function Card(v,n,s,c) {
	this.value = v;
	this.name = n;
	this.suit = s;
	this.color = c;
}

Card.prototype.print = function() {
	console.log(this.name+" "+this.value+" "+this.suit+" "+this.color);
}

function Deck() {
	this.cards = [];
	this.count = 0;
}

function deleteAt(arr, idx) {
	for(var i = idx; i < arr.length-1; i++) {
		arr[i] = arr[i+1];
	}
	arr.length--;
	return arr;
}

Deck.prototype.shuffle = function() {
	var temp = [];
	var count = this.cards.length;
	while(temp.length < count) {
		var i = Math.floor(Math.random()*this.cards.length);
		temp.push(this.cards[i]);
		deleteAt(this.cards, i);
	}
	this.cards = temp;
	return temp;
}

Deck.prototype.addCard = function(card) {
	this.cards.push(card);
	this.count++;
}

Deck.prototype.print = function() {
	console.log("Deck Size: "+this.count);
	for(var i = 0; i < this.cards.length; i++) {
		this.cards[i].print();
	}
}

Deck.prototype.createStandard = function() {
	for(var i = 0; i < 4; i++) {
		for(var j = 1; j <= 13; j++) {
			var color = null;
			var suit = null;
			var name = null;
			switch(i){
				case 0:
					suit = "hearts";
					color = "red";
					break;
				case 1:
					suit = "diamonds";
					color = "red";
					break;
				case 2:
					suit = "spades";
					color = "black";
					break;
				case 3:
					suit = "clubs";
					color = "black";
					break;
			}
			switch(j){
				case 13:
					name = "King";
					break;
				case 12:
					name = "Queen";
					break;
				case 11:
					name = "Jack";
					break;
				case 1:
					name = "Ace";
					break;
				default:
					name = j;
					break;
			}
			this.addCard(new Card(j,name,suit,color));
		}
	}
}

//Create Cards & Deck
var deck = new Deck();
for(var i = 0; i < 4; i++) {
	for(var j = 1; j <= 13; j++) {
		var color = null;
		var suit = null;
		var name = null;
		switch(i){
			case 0:
				suit = "hearts";
				color = "red";
				break;
			case 1:
				suit = "diamonds";
				color = "red";
				break;
			case 2:
				suit = "spades";
				color = "black";
				break;
			case 3:
				suit = "clubs";
				color = "black";
				break;
		}
		switch(j){
			case 13:
				name = "King";
				break;
			case 12:
				name = "Queen";
				break;
			case 11:
				name = "Jack";
				break;
			case 1:
				name = "Ace";
				break;
			default:
				name = j;
				break;
		}
		deck.addCard(new Card(j,name,suit,color));
	}
}
console.log(deck.shuffle());
// deck.print();