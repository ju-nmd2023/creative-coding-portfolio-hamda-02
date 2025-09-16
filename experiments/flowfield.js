//Citaion: https://www.youtube.com/watch?v=sZBfLgfsvSk

let particles = [];
const num = 1000;

const noiseScale = 0.01; //zoom in and make it less grainy
function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  background(255);
}

function draw() {
  // background(255, 6);

  stroke(0);
  strokeWeight(1);
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
    let speed = map(noise(p.x * 0.05, p.y * 0.05), 0, 1, 0.5, 3);
    p.x += cos(a) * speed;
    p.y += sin(a) * speed;

    //Chatgpt suggestion Line 37
    line(prevX, prevY, p.x, p.y); // draw the line as particle moves

    if (!onScreen(p)) {
      //when ps leave the canvas reset
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mousePressed() {
  noiseSeed(millis());
}
function onScreen(v) {
  //check ps on screen
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
