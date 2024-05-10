let video;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide(); // Hide the video feed
}

function draw() {
  background(0);
  video.loadPixels();
  let distortionAmount = map(mouseX, 0, width, -50, 50);
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let a = video.pixels[index + 3];
      
      // Apply distortion horizontally
      let dx = int(x + distortionAmount * sin(y * 0.1));
      dx = constrain(dx, 0, video.width - 1); // Ensure dx stays within video width
      let dindex = (dx + y * video.width) * 4;
      dindex = constrain(dindex, 0, video.pixels.length - 1); // Ensure dindex stays within pixel array bounds
      
      let dr = video.pixels[dindex];
      let dg = video.pixels[dindex + 1];
      let db = video.pixels[dindex + 2];
      let da = video.pixels[dindex + 3];
      
      // Draw distorted pixel
      stroke(dr, dg, db);
      point(x, y);
    }
  }
}
