

let nodes = [];
let edges = [];
let numRows = 15;
let numCols = 15;
let hexSize = 80;
let yOffset;

let currentSegment = 0; // Variable to track the current segment being drawn
let totalSegments = 200; // Total number of segments to draw for each edge

function setup() {
  createCanvas(800, 800); // Adjusted canvas size
  yOffset = hexSize * sin(PI / 3); // Corrected yOffset calculation
  generateNodes();
  generateEdges();
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(3);

  drawEdges(); // Call drawEdges to draw the edges

  // Draw nodes
  for (let node of nodes) {
    fill(255);
    stroke(0);
    ellipse(node.x, node.y, 5, 5);
  }
}

function generateNodes() {
  let yOffset = hexSize * sin(PI / 3); // sin(PI / 3) * hexSize
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < numCols; i++) {
      let x = i * hexSize * 1.25 + (j % 2) * hexSize * 0.625; // Adjusted x-coordinate calculation
      let y = j * yOffset * 1.25; // Adjusted y-coordinate calculation
      nodes.push(createVector(x, y));
    }
  }
}

function generateEdges() {
  let d = PI; // Angle offset for tilting hexagons
  let angles = [PI / 3 + d, 2 * PI / 3 + d, PI + d, 4 * PI / 3 + d, 5 * PI / 3 + d, TWO_PI + d];

  for (let node of nodes) {
    let neighbors = [];
    let i = nodes.indexOf(node);
    let row = floor(i / numCols);
    let col = i % numCols;

    // Find neighbors
    for (let angle of angles) {
      let x = node.x + hexSize * cos(angle);
      let y = node.y + hexSize * sin(angle);
      let neighbor = createVector(x, y);
      if (isValidNeighbor(neighbor, row, col)) {
        neighbors.push(neighbor);
      }
    }
    for (let neighbor of neighbors) {
      edges.push([node, neighbor]); // Add edge between node and neighbor
    }
  }
}

function isValidNeighbor(neighbor, row, col) {
  let x = neighbor.x; // Adjusted x-coordinate calculation
  let y = neighbor.y;  // Adjusted y-coordinate calculation
  let evenRow = col % 2 === 0;
  if (evenRow) {
    return x >= 0 && x <= (numCols - 1) * hexSize * 1.5 && y >= 0 && y <= (numRows - 1) * (yOffset * 2);
  } else {
    return x >= hexSize * 0.75 && x <= (numCols - 1) * hexSize * 1.5 && y >= yOffset && y <= (numRows - 1) * (yOffset * 2);
  }
}

function drawEdges() {
  for (let edge of edges) {
    let node1 = edge[0];
    let node2 = edge[1];
    let lengthX = (node2.x - node1.x) / totalSegments;
    let lengthY = (node2.y - node1.y) / totalSegments;
    
    for (let i = 0; i <= currentSegment; i++) {
      let x1 = node1.x + lengthX * i;
      let y1 = node1.y + lengthY * i;
      let x2 = node1.x + lengthX * (i + 1);
      let y2 = node1.y + lengthY * (i + 1);
      
      // Calculate the color gradient between yellow and blue for this segment
      let gradient = map(i, 0, totalSegments, 0, 1); // Map the current segment to a value between 0 and 1
      let yellow = color('#e8c838');
      let blue = color('#fbefce');
      let segmentColor = lerpColor(yellow, blue, gradient); // Interpolate color between yellow and blue
      stroke(segmentColor);

      line(x1, y1, x2, y2);
    }
  }

  if (currentSegment < totalSegments) {
    currentSegment++;
  }
}


