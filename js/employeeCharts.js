/* 
author: Jessica Wright for the Reboot team
*/

let data;

function preload() {
	data = loadTable('auction-orders.csv', 'csv', 'header');
}

function setup() {
	var canvas = createCanvas(600, 400);
	canvas.parent('chartDiv');
	background('#DEC981');
	noLoop();
}

function draw() {
	row = data.getRowCount();
	column = data.getColumnCount();
	
	for (let i = 0; i < row; i++) {
		// get value
		boxes = data.getColumn('boxes');
		boxCount = boxes[i];
		// draw graph
		strokeWeight('5');
		line (boxes, boxCount, (i+1) * 20 + 110, 200-boxCount + 1)
	}
}