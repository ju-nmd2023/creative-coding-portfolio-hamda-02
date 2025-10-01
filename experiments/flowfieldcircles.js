//Citation: Barney Codes: https://www.youtube.com/watch?v=sZBfLgfsvSk
let particles = [];

let colorPalette = [
  [100, 13, 95], // dark purple
  [177, 44, 0], // reddish
  [235, 91, 0], // orange
  [255, 204, 0], // yellow
];

let c;
const num = 20;

const noiseScale = 0.009; //zoom in and make it less grainy

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  c = random(colorPalette);

  background(52, 116, 51);
}

function draw() {
  //changing color automatically
  if (frameCount % (60 * 3) === 0) {
    c = random(colorPalette); //new color change

    noiseSeed(millis());
  }
  stroke(c[0], c[1], c[2], c[3]);
  strokeWeight(2);
  fill(0, 20);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    // ellipse(p.x, p.y, 0.04 + noise(p.x, p.y) * 5);

    //Chatgpt suggestion Line 42-45
    let prevX = p.x;
    let prevY = p.y;
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;

    if (i % 2 === 0) {
      a += PI;
    }

    // speed + here i'm converting angle into x & y
    let speed = map(noise(p.x * 0.05, p.y * 1), 0, 1, 0.5, 6);
    p.x += cos(a) * speed;
    p.y += sin(a) * speed;

    p.y += sin(frameCount * 0.01 + i) * 0.3;
    //Chatgpt suggestion Line 58
    circle(prevX, prevY, 60);
    // line(prevX, prevY, p.x, p.y);

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
