function setup() {
  createCanvas(1000, 700);
  colorMode(HSB);
  background(255, 0); // Transparent background
}

function draw() {
  noFill(); // to make the background transparent

  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 6; j++) {
      let x1 = i * 90;
      let y1 = j * 90;
      let x2 = x1 + 80;
      let y2 = y1;
      let x3 = x2;
      let y3 = y2 + 80;
      let x4 = x1;
      let y4 = y1 + 80;

      let hue = map(i + j, 2, 14, 0, 5); 
      let saturation = 100;
      let brightness = map(i, 1, 10, 95, 75); 

      stroke(hue, saturation, brightness);

      let applyRandom = random(1) > map(i, 1, 10, 0.9, 0.7); 

      if (applyRandom && random(1) > map(i, 1, 10, 0.3, 0.5)) { 
        let rangeX1 = map(i, 1, 10, 12, 18); // Scale the range of randomness based on i for x1
        let rangeY1 = map(i, 1, 10, 14, 18); // Scale the range of randomness based on i for y1
        let rangeX2 = map(i, 1, 10, 9, 18); // Scale the range of randomness based on i for x2
        let rangeY2 = map(i, 1, 10, 15, 18); // Scale the range of randomness based on i for y2
        let rangeX3 = map(i, 1, 10, 0, 18); // Scale the range of randomness based on i for x3
        let rangeY3 = map(i, 1, 10, 6, 18); // Scale the range of randomness based on i for y3
        let rangeX4 = map(i, 1, 10, 7, 18); // Scale the range of randomness based on i for x4
        let rangeY4 = map(i, 1, 10, 16, 18); // Scale the range of randomness based on i for y4

        x1 += random(-rangeX1, rangeX1);
        y1 += random(-rangeY1, rangeY1);
        x2 += random(-rangeX2, rangeX2);
        y2 += random(-rangeY2, rangeY2);
        x3 += random(-rangeX3, rangeX3);
        y3 += random(-rangeY3, rangeY3);
        x4 += random(-rangeX4, rangeX4);
        y4 += random(-rangeY4, rangeY4);
      }

      quad(x1, y1, x2, y2, x3, y3, x4, y4);
    }
  }

  setTimeout(() => {
    noLoop();
  }, 2500); 
}
