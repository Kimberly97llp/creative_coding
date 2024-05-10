let outerDots = [];
let innerDots = [];
let outerMaxR = 200;
let outerMinR = 10;
let outerCurrentR = outerMaxR;
let innerMaxR = 180;
let innerMinR = 30;
let innerCurrentR = innerMaxR;
let shrinking = true;
let growing = false;

function setup() {
  createCanvas(700, 700);
  background(0); // Set background color to black
  makeDots(outerDots, 170, outerMinR, outerMaxR);
  makeDots(innerDots, 4, innerMinR, innerMaxR);
}

function draw() {
  background(0); // Refresh background to black in each frame

  if (shrinking) {
    shrinkCircle();
  } else if (growing) {
    growCircle();
  }

  // Update the positions of the outer dots
  updateDots(outerDots, outerCurrentR);

  // Update the positions of the inner dots
  updateDots(innerDots, innerCurrentR);

  // Draw the updated outer dots
  stroke(255, 0, 0); // Set stroke color to red
  for (let i = 0; i < outerDots.length; i++) {
    strokeWeight(3);
    fill(255); // Set fill color to white
    let dot = outerDots[i];
    ellipse(dot.x, dot.y, 10); // Draw white dots with red border (position x, position y, size of the dot)
  }

  // Draw the updated inner dots
  stroke(255, 0, 0); // Set stroke color to red
  for (let i = 0; i < innerDots.length; i++) {
    strokeWeight(3);
    fill(255); // Set fill color to red
    let dot = innerDots[i];
    ellipse(dot.x, dot.y, 10); // Draw red dots (position x, position y, size of the dot)
  }

  // // Visualize the outer circle
  // noFill();
  // strokeWeight(1);
  // stroke(255); // Set stroke color back to white
  // ellipse(width / 2, height / 2, outerCurrentR * 2); // Draw the outer circle
}

function updateDots(dots, radius) {
  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];
    let angle = atan2(dot.y - height / 2, dot.x - width / 2); // Calculate angle
    angle -= 0.02; // Increment angle for counter-clockwise movement
    dot.x = width / 2 + radius * cos(angle); // Update x position based on radius and angle
    dot.y = height / 2 + radius * sin(angle); // Update y position based on radius and angle
  }
}

function shrinkCircle() {
  if (outerCurrentR > outerMinR) {
    outerCurrentR -= 1; // Decrease the outer circle radius
    innerCurrentR -= 1; // Decrease the inner circle radius accordingly
  } else {
    shrinking = false; // Stop shrinking
    // Add any additional actions after shrinking if needed
  }
}

function growCircle() {
  if (outerCurrentR < outerMaxR) {
    outerCurrentR += 1; // Increase the outer circle radius
    innerCurrentR += 1; // Increase the inner circle radius accordingly
  } else {
    growing = false; // Stop growing
    // Add any additional actions after growing if needed
  }
}

function makeDots(dots, n, minR, maxR) { // Makes the dots
  for (let i = 0; i < n; i++) {
    let a = random(0, TWO_PI); // Random angle
    let r = random(minR, maxR); // Random radius within minR and maxR
    let x = width / 2 + r * cos(a); // Calculate x position based on random radius and angle
    let y = height / 2 + r * sin(a); // Calculate y position based on random radius and angle
    let newDot = createVector(x, y);
    dots.push(newDot);
  }
}

function mouseClicked() {
  if (!shrinking && !growing) {
    growing = true; // Start growing
  }
}

