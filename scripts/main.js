var canvasSize = 16;
var selectedColor = "pen-color";
var penColor = "#333";

$(document).ready(function() {
	createTable(canvasSize);
	$("#pen-color").prop("checked", true)
})

function createTable(size) {
	var $canvas = $("#canvas");

	for(var i=0;i<size;i++) {
		var tableRow = document.createElement("div");
		tableRow.style.width = "600px";
		tableRow.style.height = (600/size) + "px";

		for (var j=0;j<size;j++) {
			var tableCell = document.createElement("div");
			tableCell.style.width = (600/size) + "px";
			tableCell.style.height = (600/size) + "px";
			tableCell.setAttribute("class", "table-cell");

			tableRow.append(tableCell);
		}
		$canvas.append(tableRow);
	}
};

$("#canvas").on("mouseenter", ".table-cell", function(){
	$(this).css("background-color", penColor);
	if (selectedColor === "gradient-color") {
		$(this).css("opacity", "+=0.1");
		console.log("test");
	} else {
		$(this).css("opacity", "1")
	}
	setNextColor();
});

$(".color-form > input").on("click", function() {
	selectedColor = $(this).attr('id');
	setNextColor();
	console.log($(this).attr('id') + " checked");
})

function setNextColor() {
	switch(selectedColor) {
		case "pen-color":
			penColor = "#333";
			break;
		case "random-color":
			var redValue = Math.floor(Math.random() * 255);
			var greenValue = Math.floor(Math.random() * 255);
			var blueValue = Math.floor(Math.random() * 255);
			penColor = "#" + redValue.toString(16) + greenValue.toString(16) + blueValue.toString(16);
			break;
		case "gradient-color":
			penColor = "#000";
			break;
		default:
			penColor = "#333";
			break;
	}
}

function clearCanvas() {
	$("#canvas").empty();
	createTable(canvasSize);
}

function clearButtonClicked() {
	var gridSize = prompt("Please enter the grid size", canvasSize);
    if (gridSize != null) {
        canvasSize = gridSize;
        clearCanvas();
    }
}




