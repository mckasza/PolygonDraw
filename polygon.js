function Polygon(numSides, sideLength, xCoord, yCoord){
	this.numSides = numSides;
	this.sideLength = sideLength;
	this.xCoord = xCoord;
	this.yCoord = yCoord;
}

Polygon.prototype.setNumSides = function(numSides){
	this.numSides = numSides;
}

Polygon.prototype.getNumSides = function(){
	return this.numSides;
}

Polygon.prototype.getSideLength = function(){
	return this.sideLength;
}

Polygon.prototype.setSideLength = function(sideLength){
	this.sideLength = sideLength;
}

Polygon.prototype.getPerimeter = function(){
	return this.getNumSides()*this.getSideLength();
}

Polygon.prototype.getApothem = function(){
	return this.getSideLength()/(2*Math.tan(Math.PI/this.getNumSides()));
}

Polygon.prototype.getXCoord = function(){
	return this.xCoord;
}

Polygon.prototype.setXCoord = function(xCoord){
	this.xCoord = xCoord;
}

Polygon.prototype.getYCoord = function(){
	return this.yCoord;
}

Polygon.prototype.setYCoord = function(yCoord){
	this.yCoord = yCoord;
}


