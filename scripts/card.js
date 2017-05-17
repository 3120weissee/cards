function Card(v,n,s,c) {
	this.value = v;
	this.name = n;
	this.suit = s;
	this.color = c;
}

Card.prototype.print = function() {
	console.log(this.name+" "+this.value+" "+this.suit+" "+this.color);
}

Card.prototype.draw = function() {
	var html = "";
	html += "<p class='top'>"+this.value+"</p>";
	html += "";
}