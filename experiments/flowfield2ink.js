//Citation: Barney Codes: https://www.youtube.com/watch?v=sZBfLgfsvSk

let particles = [];
const num = 200;

const noiseScale = 0.008; //zoom in and make it less grainy

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  background(255);
}

function draw() {
  //changing color automatically
  if (frameCount % (60 * 3) === 0) {
    // CurrentStroke = random(CurrentStroke);
    stroke(0);
    noiseSeed(millis());
  }

  // stroke(CurrentStroke[0], CurrentStroke[1], CurrentStroke[2], 50);
  strokeWeight(random(1, 6));
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    // ellipse(p.x, p.y, 0.04 + noise(p.x, p.y) * 5);

    //Chatgpt suggestion Line 32-35
    let prevX = p.x;
    let prevY = p.y;
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;

    // Citation Chatgpt LINE 45 & 46 have the pariles come from opposite direction to or left
    if (i % 2 == 0) {
      a += PI; //adding 180 = flow the opposite way
    }

    // spped + here i'm converting angle into x & y
    let speed = map(noise(p.x * 0.05, p.y * 0.05), 0, 1, 0.5, 6);
    p.x += cos(a) * speed;
    p.y += sin(a) * speed;

    p.y += sin(frameCount * 0.01 + i) * 0.3;
    //Chatgpt suggestion Line 49
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
