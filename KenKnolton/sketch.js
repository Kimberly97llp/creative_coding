let img;
let font;
const gridSize = 8;
const sentence = 
`
The New Colossus
BY EMMA LAZARUS
Not like the brazen giant of Greek fame,
With conquering limbs astride from land to land;
Here at our sea-washed, sunset gates shall stand
A mighty woman with a torch, whose flame
Is the imprisoned lightning, and her name
Mother of Exiles. From her beacon-hand
Glows world-wide welcome; her mild eyes command
The air-bridged harbor that twin cities frame.
“Keep, ancient lands, your storied pomp!” cries she
With silent lips. “Give me your tired, your poor,
Your huddled masses yearning to breathe free,
The wretched refuse of your teeming shore.
Send these, the homeless, tempest-tost to me,
I lift my lamp beside the golden door!”
`;

let erasedPositions = [];

function preload() {
  // Load the image
  img = loadImage('4.png');
  // Load a font
  font = loadFont('Hackout-Eaw5j.otf'); // Replace 'YourFont.ttf' with the path to your font file
}

function setup() {
  createCanvas(800, 800);
  textFont(font); // Set the loaded font
}

function draw() {
  background(0); // black
  textSize(gridSize); // Set the text size to match the grid size
  let sentenceIndex = 0;

  for (let y = gridSize / 2 + 25; y < img.height; y += gridSize) { // Adjust starting position vertically
    for (let x = gridSize / 2 + 25; x < img.width; x += gridSize) { // Adjust starting position horizontally
      let col = img.get(x, y); // Get the color of the pixel
      let brightness = (red(col) + green(col) + blue(col)) / 3; // Calculate the brightness of the color
      
      // Choose the character from the sentence based on brightness
      let charToPrint = sentence.charAt(sentenceIndex);

      // Calculate the distance between the cursor and the text position
      let distance = dist(x, y, mouseX, mouseY);
      let maxDistance = 60; // Adjust this value to control the size of the eraser area
      
      // If the mouse is pressed and the cursor is within the eraser area
      if (mouseIsPressed && distance < maxDistance) {
        let pos = createVector(x, y);
        let exists = false;
        for (let erasedPos of erasedPositions) {
          if (pos.equals(erasedPos)) {
            exists = true;
            break;
          }
        }
        if (!exists) {
          erasedPositions.push(pos);
        }
      }

      // Draw the text with green stroke and actual color fill if it's not in the erased positions
      let printChar = true;
      for (let erasedPos of erasedPositions) {
        if (x === erasedPos.x && y === erasedPos.y) {
          printChar = false;
          break;
        }
      }
      if (printChar) {
        // Draw the text with green stroke
        stroke(0, 255, 0); // Green color
        strokeWeight(0.65); // Thick stroke
        fill(0); // Black fill for the text
        text(charToPrint, x, y);

        // Draw the text with the actual color
        noStroke(); // No stroke for the actual text
        fill(brightness); // Use brightness to determine text color
        text(charToPrint, x, y);
      }

      sentenceIndex = (sentenceIndex + 1) % sentence.length;
    }
  }
}



// THE ONE WITH THE DISSAPERAING TEXT
// let img;
// let font;
// const gridSize = 8;
// const sentence = 
// `
// The New Colossus
// BY EMMA LAZARUS
// Not like the brazen giant of Greek fame,
// With conquering limbs astride from land to land;
// Here at our sea-washed, sunset gates shall stand
// A mighty woman with a torch, whose flame
// Is the imprisoned lightning, and her name
// Mother of Exiles. From her beacon-hand
// Glows world-wide welcome; her mild eyes command
// The air-bridged harbor that twin cities frame.
// “Keep, ancient lands, your storied pomp!” cries she
// With silent lips. “Give me your tired, your poor,
// Your huddled masses yearning to breathe free,
// The wretched refuse of your teeming shore.
// Send these, the homeless, tempest-tost to me,
// I lift my lamp beside the golden door!”
// `;

// let fading = false;
// let fadingStart;

// function preload() {
//   // Load the image
//   img = loadImage('4.png');
//   // Load a font
//   font = loadFont('Hackout-Eaw5j.otf'); // Replace 'YourFont.ttf' with the path to your font file
// }

// function setup() {
//   createCanvas(800, 800);
//   textFont(font); // Set the loaded font
// }

// function draw() {
//   background(0); // black
//   textSize(gridSize); // Set the text size to match the grid size
//   let sentenceIndex = 0;

//   for (let y = gridSize / 2 + 25; y < img.height; y += gridSize) { // Adjust starting position vertically
//     for (let x = gridSize / 2 + 25; x < img.width; x += gridSize) { // Adjust starting position horizontally
//       let col = img.get(x, y); // Get the color of the pixel
//       let brightness = (red(col) + green(col) + blue(col)) / 3; // Calculate the brightness of the color
      
//       // Choose the character from the sentence based on brightness
//       let charToPrint = sentence.charAt(sentenceIndex);

//       // Calculate the distance between the cursor and the text position
//       let distance = dist(x, y, mouseX, mouseY);
//       let maxDistance = 50; // Adjust this value to control the range of disappearance

//       // If the cursor is within the threshold distance, make the character disappear
//       if (distance < maxDistance) {
//         charToPrint = ''; // Set the character to an empty string
//       }

//       // Draw the text with green stroke
//       stroke(0, 255, 0); // Green color
//       strokeWeight(0.65); // Thick stroke
//       fill(0); // Black fill for the text
//       text(charToPrint, x, y);

//       // Draw the text with the actual color
//       noStroke(); // No stroke for the actual text
//       fill(brightness); // Use brightness to determine text color
//       text(charToPrint, x, y);

//       sentenceIndex = (sentenceIndex + 1) % sentence.length;
//     }
//   }
// }

// function mouseMoved() {
//   redraw(); // Redraw the canvas when the mouse moves
// }




// this is the one that that does not make the text disappear
// let img;
// let font;
// const gridSize = 8;
// const sentence = 
// `
// The New Colossus
// BY EMMA LAZARUS
// Not like the brazen giant of Greek fame,
// With conquering limbs astride from land to land;
// Here at our sea-washed, sunset gates shall stand
// A mighty woman with a torch, whose flame
// Is the imprisoned lightning, and her name
// Mother of Exiles. From her beacon-hand
// Glows world-wide welcome; her mild eyes command
// The air-bridged harbor that twin cities frame.
// “Keep, ancient lands, your storied pomp!” cries she
// With silent lips. “Give me your tired, your poor,
// Your huddled masses yearning to breathe free,
// The wretched refuse of your teeming shore.
// Send these, the homeless, tempest-tost to me,
// I lift my lamp beside the golden door!”
// `;

// function preload() {
//   // Load the image
//   img = loadImage('4.png');
//   // Load a font
//   font = loadFont('Hackout-Eaw5j.otf'); // Replace 'YourFont.ttf' with the path to your font file
// }

// function setup() {
//   createCanvas(800, 800);
//   textFont(font); // Set the loaded font
//   noLoop();
// }

// function draw() {
//   background(0); // black
//   textSize(gridSize); // Set the text size to match the grid size
  
//   let sentenceIndex = 0; // Index to iterate through characters of the sentence

//   for (let y = gridSize / 2 +25; y < img.height; y += gridSize) { // Adjust starting position vertically
//     for (let x = gridSize / 2+25; x < img.width; x += gridSize) { // Adjust starting position horizontally
//       let col = img.get(x, y); // Get the color of the pixel
//       fill(col);
//       noStroke();
//       let brightness = (red(col) + green(col) + blue(col)) / 3; // Calculate the brightness of the color
      
//       // Choose the character from the sentence based on brightness
//       let charToPrint = sentence.charAt(sentenceIndex);
      
//       // Draw the text with green stroke
//       stroke(0, 255, 0); // Green color
//       strokeWeight(0.65); // Thick stroke
//       // strokeWeight(random(0.5, 0.8));
//       fill(0); // Black fill for the text
//       text(charToPrint, x, y);

//       // Draw the text with the actual color
//       // noStroke(); // No stroke for the actual text
//       fill(brightness); // Use brightness to determine text color
//       text(charToPrint, x, y);


      
//       // Increment the index to move to the next character
//       sentenceIndex = (sentenceIndex + 1) % sentence.length;
//     }
//   }
// }






// this is the original one with the old image
// let img;
// let font;
// const gridSize = 8;
// const sentence = 
// `
// The New Colossus
// BY EMMA LAZARUS
// Not like the brazen giant of Greek fame,
// With conquering limbs astride from land to land;
// Here at our sea-washed, sunset gates shall stand
// A mighty woman with a torch, whose flame
// Is the imprisoned lightning, and her name
// Mother of Exiles. From her beacon-hand
// Glows world-wide welcome; her mild eyes command
// The air-bridged harbor that twin cities frame.
// “Keep, ancient lands, your storied pomp!” cries she
// With silent lips. “Give me your tired, your poor,
// Your huddled masses yearning to breathe free,
// The wretched refuse of your teeming shore.
// Send these, the homeless, tempest-tost to me,
// I lift my lamp beside the golden door!”
// `;

// function preload() {
//   // Load the image
//   img = loadImage('4.png');
//   // Load a font
//   font = loadFont('Hackout-Eaw5j.otf'); // Replace 'YourFont.ttf' with the path to your font file
// }

// function setup() {
//   createCanvas(800, 800);
//   textFont(font); // Set the loaded font
//   noLoop();
// }

// function draw() {
//   background(0); // black
//   textSize(gridSize); // Set the text size to match the grid size
  
//   let sentenceIndex = 0; // Index to iterate through characters of the sentence

//   for (let y = gridSize / 2 +25; y < img.height; y += gridSize) { // Adjust starting position vertically
//     for (let x = gridSize / 2+25; x < img.width; x += gridSize) { // Adjust starting position horizontally
//       let col = img.get(x, y); // Get the color of the pixel
//       fill(col);
//       noStroke();
//       let brightness = (red(col) + green(col) + blue(col)) / 3; // Calculate the brightness of the color
      
//       // Choose the character from the sentence based on brightness
//       let charToPrint = sentence.charAt(sentenceIndex);
      
//       // Draw the text with green stroke
//       stroke(0, 255, 0); // Green color
//       strokeWeight(0.55); // Thick stroke
//       fill(0); // Black fill for the text
//       text(charToPrint, x, y);

//       // Draw the text with the actual color
//       // noStroke(); // No stroke for the actual text
//       fill(brightness); // Use brightness to determine text color
//       text(charToPrint, x, y);

//       // // Draw the text with green stroke
//       // if (random() > 0.5) {
//       //   stroke(0, 255, 0); // Green color
//       //   strokeWeight(random(0.4, 0.8)); // Random stroke weight between 0.5 and 0.8
//       //   fill(0); // Black fill for the text
//       //   text(charToPrint, x, y);
//       //   fill(brightness); // Use brightness to determine text color
//       //   text(charToPrint, x, y);
//       // } else {
//       //   stroke(0, 255, 0); // Green color
//       //   strokeWeight(0.55); // Thick stroke
//       //   fill(0); // Black fill for the text
//       //   text(charToPrint, x, y);

//       //   // Draw the text with the actual color
//       //   // noStroke(); // No stroke for the actual text
//       //   fill(brightness); // Use brightness to determine text color
//       //   text(charToPrint, x, y);
//       // }
      
//       // fill(0); // Black fill for the text
//       // text(charToPrint, x, y);
      

      
//       // Increment the index to move to the next character
//       sentenceIndex = (sentenceIndex + 1) % sentence.length;
//     }
//   }
// }

