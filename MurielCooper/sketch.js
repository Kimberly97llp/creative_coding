// let font;

// function preload() {
//   // font = loadFont('Bauhaus_.ttf');
//   font = loadFont('Helvetica-Bold-Font.ttf');

// }

// function setup() {
//   createCanvas(600, 800);
//   textSize(160);
//   textFont(font);
// }

// function draw() {
//   background('#f2f1e6');
//   // textSize(202);


//   // this is the first layer of the text the one fuly seen
//   push();
//   var yellow = color(255, 255, 0);
//   yellow.setAlpha(300);
//   fill(yellow); // Set fill to red
//   translate(190, height); // Move the origin to the bottom-left corner
//   rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
//   text('BAUHAUS', 40,0); // Draw text at the origin point
//   pop();

//   // textSize(202);
//   push();
//   var red = color(255, 0, 0);
//   red.setAlpha(300);
//   fill(red); // Set fill to red
//   translate(190, height); // Move the origin to the bottom-left corner
//   rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
//   text('BAUHAUS', 20,0); // Draw text at the origin point
//   pop();

//   push();
//   var blue = color(0, 146, 189);
//   blue.setAlpha(200);
//   fill(blue); // Set fill to blue
//   translate(190, height); // Move the origin to the bottom-left corner
//   rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
//   text('BAUHAUS', 0, 0); // Draw text at the origin point
//   pop();  

//   /////////

//   //repeting but the for the text that cant be seen
//   // this is the first layer of the text the one fuly seen
//   push();
//   var yellow = color(255, 255, 0);
//   yellow.setAlpha(200);
//   fill(yellow); // Set fill to red
//   translate(25, height); // Move the origin to the bottom-left corner
//   rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
//   text('BAUHAUS', 40,0); // Draw text at the origin point
//   pop();

//   // textSize(202);
//   push();
//   var red = color(255, 0, 0);
//   red.setAlpha(200);
//   fill(red); // Set fill to red
//   translate(25, height); // Move the origin to the bottom-left corner
//   rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
//   text('BAUHAUS', 20,0); // Draw text at the origin point
//   pop();

//   push();
//   var blue = color(0, 146, 189);
//   blue.setAlpha(200);
//   fill(blue); // Set fill to blue
//   translate(25, height); // Move the origin to the bottom-left corner
//   rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
//   text('BAUHAUS', 0, 0); // Draw text at the origin point
//   pop();  
// }


//The graphic designer can also operate in this field, where lettering and spacing must be calculated according to the effect required.

let font;

function preload() {
  font = loadFont('Bauhaus_.ttf');
  // font = loadFont('NeueHelveticaBQBlack.otf');

}

function setup() {
  createCanvas(600, 800);
  textSize(202);
  textFont(font);
}

function draw() {
  background('#f2f1e6');
  // textSize(202);


  // this is the first layer of the text the one fuly seen
  push();
  var yellow = color(255, 255, 0);
  yellow.setAlpha(200);
  fill(yellow); // Set fill to red
  translate(190, height); // Move the origin to the bottom-left corner
  rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
  text('BAUHAUS', 40,0); // Draw text at the origin point
  pop();

  // textSize(202);
  push();
  var red = color(255, 0, 0);
  red.setAlpha(200);
  fill(red); // Set fill to red
  translate(190, height); // Move the origin to the bottom-left corner
  rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
  text('BAUHAUS', 20,0); // Draw text at the origin point
  pop();

  push();
  var blue = color(0, 146, 189);
  blue.setAlpha(200);
  fill(blue); // Set fill to blue
  translate(190, height); // Move the origin to the bottom-left corner
  rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
  text('BAUHAUS', 0, 0); // Draw text at the origin point
  pop();  

  /////////

  //repeting but the for the text that cant be seen
  // this is the first layer of the text the one fuly seen
  push();
  var yellow = color(255, 255, 0);
  yellow.setAlpha(200);
  fill(yellow); // Set fill to red
  translate(25, height); // Move the origin to the bottom-left corner
  rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
  text('BAUHAUS', 40,0); // Draw text at the origin point
  pop();

  // textSize(202);
  push();
  var red = color(255, 0, 0);
  red.setAlpha(200);
  fill(red); // Set fill to red
  translate(25, height); // Move the origin to the bottom-left corner
  rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
  text('BAUHAUS', 20,0); // Draw text at the origin point
  pop();

  push();
  var blue = color(0, 146, 189);
  blue.setAlpha(200);
  fill(blue); // Set fill to blue
  translate(25, height); // Move the origin to the bottom-left corner
  rotate(-HALF_PI); // Rotate by -90 degrees (clockwise)
  text('BAUHAUS', 0, 0); // Draw text at the origin point
  pop();  
}

