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
  background(0); // background color to black
  makeDots(outerDots, 170, outerMinR, outerMaxR);
  makeDots(innerDots, 4, innerMinR, innerMaxR);
}

function draw() {
  background(0); 

  if (shrinking) {
    shrinkCircle();
  } else if (growing) {
    growCircle();
  }

  updateDots(outerDots, outerCurrentR);

  updateDots(innerDots, innerCurrentR);

  stroke(255, 0, 0); 
  for (let i = 0; i < outerDots.length; i++) {
    strokeWeight(3);
    fill(255); 
    let dot = outerDots[i];
    ellipse(dot.x, dot.y, 10); 
  }

  stroke(255, 0, 0); 
  for (let i = 0; i < innerDots.length; i++) {
    strokeWeight(3);
    fill(255); 
    let dot = innerDots[i];
    ellipse(dot.x, dot.y, 10); 
  }

}

function updateDots(dots, radius) {
  for (let i = 0; i < dots.length; i++) {
    let dot = dots[i];
    let angle = atan2(dot.y - height / 2, dot.x - width / 2); 
    angle -= 0.02; 
    dot.x = width / 2 + radius * cos(angle); 
    dot.y = height / 2 + radius * sin(angle); 
  }
}

function shrinkCircle() {
  if (outerCurrentR > outerMinR) {
    outerCurrentR -= 1; 
    innerCurrentR -= 1; 
  } else {
    shrinking = false; 
  }
}

function growCircle() {
  if (outerCurrentR < outerMaxR) {
    outerCurrentR += 1; 
    innerCurrentR += 1; 
  } else {
    growing = false; // Stop
  }
}

function makeDots(dots, n, minR, maxR) { 
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
    growing = true; //  growing
  }
}

