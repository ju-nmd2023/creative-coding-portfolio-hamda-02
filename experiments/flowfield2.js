//Citaion: https://www.youtube.com/watch?v=sZBfLgfsvSk

let particles = [];
const num = 200;

const noiseScale = 0.006; //zoom in and make it less grainy

// let CurrentStroke = [
//   [34, 139, 34], // Forest Green
//   [107, 142, 35], // Olive Green
//   [144, 238, 144], // Light Green (leaves in sunlight)
// ];

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  background(255);
}

function draw() {
  // background(255, 6);
  //changing color automatically
  if (frameCount % (60 * 2) === 0) {
    // CurrentStroke = random(CurrentStroke);
    stroke(0);
    noiseSeed(millis());
  }

  // stroke(CurrentStroke[0], CurrentStroke[1], CurrentStroke[2], 50);
  strokeWeight(random(1, 4));
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    // ellipse(p.x, p.y, 0.04 + noise(p.x, p.y) * 5);

    //Chatgpt suggestion Line 25-27
    let prevX = p.x;
    let prevY = p.y;
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;

    // spped + here i'm converting angle into x & y
    let speed = map(noise(p.x * 0.05, p.y * 0.05), 0, 1, 0.5, 6);
    p.x += cos(a) * speed;
    p.y += sin(a) * speed;

    p.y += sin(frameCount * 0.01 + i) * 0.3;
    //Chatgpt suggestion Line 37
    line(prevX, prevY, p.x, p.y);
    if (!onScreen(p)) {
      //when ps leave the canvas reset
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onScreen(v) {
  //check ps on screen
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
