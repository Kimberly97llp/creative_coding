let colors = ['#b8cf65', '#343240', '#2964ae', '#be3155', '#f3d53e', '#59cbaf', '#ceced9', '#4a466c'];
let colors2 = ['#46603a', '#acd7db', '#653852', '#cebf01', '#24386c', '#efc0c9', '#038587', '#d25a5d'];
function setup() {
  createCanvas(800, 700);
}

function draw() {
  background("#814929"); // Set the background color to brown
  noStroke();

  space = 200;
  sh = 100;
  // Draw the first row of rhombuses
  drawRhombus(100, space, colors[0], colors[1]);
  drawRhombus(250, space, colors[2], colors[3]);
  drawRhombus(450, space, colors[4], colors[5]);
  drawRhombus(650, space, colors[6], colors[7]);
  
  // Draw the second row of rhombuses
  drawRhombus(100, 500, colors2[0], colors2[1]);
  drawRhombus(250, 500, colors2[2], colors2[3]);
  drawRhombus(450, 500, colors2[4], colors2[5]);
  drawRhombus(650, 500, colors2[6], colors2[7]);
}

function drawRhombus(x, y, color1, color2) {
  push(); // Save the current transformation matrix
  scale(0.9); // Scale the rhombus by a factor of 1.5
  translate(x, y); // Translate to the rhombus position
  rotate( (PI / 18) *7.7); // Rotate by 72 degrees (2*PI/5 radians)
  
  let h = 180
  // Draw the top triangle
  fill(color1);
  beginShape();
  vertex(-h, 0); // Top-left vertex
  vertex(0, -15*1.5); // Top-right vertex
  vertex(h, 15); // Bottom-right vertex
  endShape(CLOSE);
  
  // Draw the bottom triangle
  fill(color2);
  beginShape();
  vertex(-h, 0); // Top-left vertex
  vertex(0, 40); // Top-right vertex
  vertex(h, 15); // Bottom-right vertex
  endShape(CLOSE);
  
  pop(); // Restore the transformation matrix
}


