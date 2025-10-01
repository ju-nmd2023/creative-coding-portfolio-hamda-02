//Citation: Barney Codes: https://www.youtube.com/watch?v=sZBfLgfsvSk
let particles = [];

let colorPalette = [
  //De Stijl Piet Mondrian color palette
  [216, 219, 215], // light gray
  [231, 5, 3], // red
  [3, 0, 173], // blue
  [253, 222, 6], // yellow
];

let c;
const num = 10;

const noiseScale = 0.0007; //zoom in and make it less grainy

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
  c = random(colorPalette);

  background(255);
}

function draw() {
  //changing color automatically
  if (frameCount % (60 * 2) === 0) {
    // CurrentStroke = random(CurrentStroke);
    c = random(colorPalette); //new color change

    noiseSeed(millis());
  }
  stroke(0);
  strokeWeight(2);
  fill(c[0], c[1], c[2], c[3]);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    // ellipse(p.x, p.y, 0.04 + noise(p.x, p.y) * 5);

    //Chatgpt suggestion Line 51-54
    let prevX = p.x;
    let prevY = p.y;
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;

    if (i % 2 === 0) {
      a += PI;
    }

    // spped + here i'm converting angle into x & y
    let speed = map(noise(p.x * 0.05, p.y * 1), 0, 1, 0.5, 9);
    p.x += cos(a) * speed;
    p.y += sin(a) * speed;

    p.y += sin(frameCount * 0.09 + i) * 9;
    //Chatgpt suggestion Line 67
    rect(prevX, prevY, 60);
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
