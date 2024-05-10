let nodes = [];
let edges = [];
let numRows = 15;
let numCols = 15;
let hexSize = 60;
let yOffset;
//for the new lines
let nodesNew = []; // Array to store new nodes
let edgesNew = []; // Array to store new edges
//for the thrid set of lines
let nodesNew2 = []; // Array to store new nodes
let edgesNew2 = []; // Array to store new edges

let currentSegment = 0; // Variable to track the current segment being drawn
let totalSegments = 40; // Total number of segments to draw for each edge

let time = 0;

function setup() {
  createCanvas(800, 800); // Adjusted canvas size
  yOffset = hexSize * sin(PI / 3); // Corrected yOffset calculation
  generateNodes();
  // generateEdges(nodes,edges); //need to pass nodes as an argument);
  // console.log("original" ,  nodes);
  //generating new lines a bit ofset following the same pattern
  generateNodesNew(); // Generate new nodes
  // generateEdges(nodesNew, edgesNew); // Generate new edges

  //generating the third set od lines
  generateNodesNew2(); // Generate new nodes
  // generateEdges(nodesNew, edgesNew2); // Generate new edges

}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(4);

  let yellow = color('#e8c838'); // Define yellow color
  let blue = color('#fbefce'); // Define blue color
  let red = color('#b24236');
  let blue2 = color('#5e8ac1');
  let red2 = color('#ff0000');
  let blue3 = color('#0000ff');

  if (time == 0) {
    if (currentSegment == 0) {
      generateEdges(nodes, edges);
    }
    drawEdges(edges, yellow, blue, red, blue2, red2, blue3); // Call drawEdges to draw the edges
  } else if (time == 1) {
    if (currentSegment == 0) {
      generateEdges(nodesNew, edgesNew);
    }
    drawEdges(edgesNew, yellow, blue, red, blue2, red2, blue3); // Call drawEdges to draw the edges
  } else if (time == 2) {
    if (currentSegment == 0) {
      generateEdges(nodesNew2, edgesNew2);
    }
    strokeWeight(0.5);
    drawEdges(edgesNew2, yellow, blue, red, blue2, red2, blue3); // Call drawEdges to draw the edges
  }

  if (currentSegment < totalSegments) {
    currentSegment++;
  } else {
    currentSegment = 0;
    time = (time + 1) % 3; // Switch to the next set of edges
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

function generateEdges(nodes , edges) { //need to pass nodes as an argument but also the edges to save into 
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

function drawEdges(edges, yellow, blue, red, blue2, red2, blue3) {
  // defines set of colors    
  let one = [yellow, blue];
  let two = [red, blue2];
  let three = [red2, blue3];
  let colors = [one, two, three];

  for (let edge of edges) {
    let node1 = edge[0];
    let node2 = edge[1];

    // let numbersegments = random(50);
    // let totalSegments = floor(numbersegments);
    let lengthX = (node2.x - node1.x) / totalSegments;
    let lengthY = (node2.y - node1.y) / totalSegments;
    
    let value =  random(3);
    let color = colors[floor(value)];
    let yellow = color[0];
    let blue = color[1];

    for (let i = 0; i <= currentSegment; i++) {
      let x1 = node1.x + lengthX * i;
      let y1 = node1.y + lengthY * i;
      let x2 = node1.x + lengthX * (i + 1);
      let y2 = node1.y + lengthY * (i + 1);
      
      // Calculate the color gradient between yellow and blue for this segment
      let gradient = map(i, 0, totalSegments, 0, 1); // Map the current segment to a value between 0 and 1
      // let yellow = color('#e8c838');
      // let blue = color('#fbefce');
      let segmentColor = lerpColor(yellow, blue, gradient); // Interpolate color between yellow and blue
      stroke(segmentColor);

      line(x1, y1, x2, y2);
    }
  }

  if (currentSegment < totalSegments) {
    currentSegment++;
  }
}

//for the new lines
function generateNodesNew() {
  let yOffset = hexSize * sin(PI / 3); // sin(PI / 3) * hexSize
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < numCols; i++) {
      let x = i * hexSize * 1.25 + (j % 2) * hexSize * 0.625 +3; // Adjusted x-coordinate calculation
      let y = j * yOffset * 1.25+4; // Adjusted y-coordinate calculation
      nodesNew.push(createVector(x, y));
    }
  }
}

//for the thrid set of lines
function generateNodesNew2() {
  let yOffset = hexSize * sin(PI / 3); // sin(PI / 3) * hexSize
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < numCols; i++) {
      let x = i * hexSize * 1.25 + (j % 2) * hexSize * 0.625 +25; // Adjusted x-coordinate calculation
      let y = j * yOffset * 1.25+25; // Adjusted y-coordinate calculation
      nodesNew2.push(createVector(x, y));
    }
  }
}
