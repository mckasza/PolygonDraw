function onSidesDecrement(){
	if(polygon.getNumSides() > 3){
		polygon.setNumSides(polygon.getNumSides()-1);
		document.getElementById("num_sides_input").value = polygon.getNumSides();
		draw();
	}
}
function onSidesIncrement(){
	if(polygon.getNumSides() < 100){
		polygon.setNumSides(polygon.getNumSides()+1);
		document.getElementById("num_sides_input").value = polygon.getNumSides();
		draw();
	}
}
function onSidesInputChanged(){
	var numSidesInputValue = document.getElementById("num_sides_input").value;
	if(!isNaN(numSidesInputValue)){
		numSidesInputValue = parseInt(numSidesInputValue);
	}
	if((numSidesInputValue >= 3) && (numSidesInputValue <= 100)){
		polygon.setNumSides(numSidesInputValue);
		draw();
	}
}
function onLengthDecrement(){
	if(polygon.getSideLength() > 1){
		polygon.setSideLength(polygon.getSideLength()-1);
		document.getElementById("side_length_input").value = polygon.getSideLength();
		draw();
	}
}
function onLengthIncrement(){
	if(polygon.getSideLength() < 600){
		polygon.setSideLength(polygon.getSideLength()+1);
		document.getElementById("side_length_input").value = polygon.getSideLength();
		draw();
	}
}
function onLengthInputChanged(){
	var sideLengthInputValue = document.getElementById("side_length_input").value;
	if(!isNaN(sideLengthInputValue)){
		sideLengthInputValue = parseInt(sideLengthInputValue);
	}
	if((sideLengthInputValue >= 1) && (sideLengthInputValue <= 100)){
		polygon.setSideLength(sideLengthInputValue);
		draw();
	}
}
function onXDecrement(){
	if(polygon.getXCoord() > -300){
		polygon.setXCoord(polygon.getXCoord()-1);
		document.getElementById("x_coord_input").value = polygon.getXCoord();
		draw();
	}
}
function onXIncrement(){
	if(polygon.getXCoord() > -300){
		polygon.setXCoord(polygon.getXCoord()+1);
		document.getElementById("x_coord_input").value = polygon.getXCoord();
		draw();
	}
}
function onXCoordInputChanged(){
	var xCoordInputValue = document.getElementById("x_coord_input").value;
	if(!isNaN(xCoordInputValue)){
		xCoordInputValue = parseInt(xCoordInputValue);
	}
	if((xCoordInputValue >= -300) && (xCoordInputValue <= 300)){
		polygon.setXCoord(xCoordInputValue);
		draw();
	}
}
function onYDecrement(){
	if(polygon.getYCoord() > -300){
		polygon.setYCoord(polygon.getYCoord()-1);
		document.getElementById("y_coord_input").value = polygon.getYCoord();
		draw();
	}
}
function onYIncrement(){
	if(polygon.getYCoord() > -300){
		polygon.setYCoord(polygon.getYCoord()+1);
		document.getElementById("y_coord_input").value = polygon.getYCoord();
		draw();
	}
}
function onYCoordInputChanged(){
	var yCoordInputValue = document.getElementById("y_coord_input").value;
	if(!isNaN(yCoordInputValue)){
		yCoordInputValue = parseInt(yCoordInputValue);
	}
	if((yCoordInputValue >= -300) && (yCoordInputValue <= 300)){
		polygon.setYCoord(yCoordInputValue);
		draw();
	}
}
