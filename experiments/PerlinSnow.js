//Citation: Mix of Garrite's noiseexample lecture recording and Coding train youtube channel
//Citation: snowflakes https://www.youtube.com/watch?v=UcdigVaIYAk&t=72s
let SnowFlakes = [];

let inc = 0.002;
let start = 0;
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(81, 95, 122);

  const originalY = 100; //the base line
  const divider = 150;
  // noiseSeed(1);

  for (let i = 0; i < 2; i++) {
    let xoff = start + i * 4000;
    let baseY = originalY + i * 200 + noise(xoff) * 110;
    noStroke();

    if (i === 0) {
      fill(33, 20, 0, 240);
    } else {
      fill(33, 20, 0);
    }

    beginShape();

    for (let x = 0; x < innerWidth; x++) {
      const y = baseY + noise(x / divider) * 200;
      vertex(x, y);
      xoff += inc;
    }

    vertex(innerWidth, innerHeight);
    vertex(0, innerHeight);
    endShape();
  }

  start += inc;

  //----- snowflakes------
  for (let i = 0; i < 1; i++) {
    let p = new SnowFlake();
    SnowFlakes.push(p);
  }

  for (let i = SnowFlakes.length - 1; i >= 0; i--) {
    SnowFlakes[i].update();
    SnowFlakes[i].show();
    if (SnowFlakes[i].finished()) {
      //remove this particle
      SnowFlakes.splice(i, 1);
    }
  }
  // noLoop();
}
class SnowFlake {
  constructor() {
    this.x = random(innerWidth);
    this.y = 0;
    this.vx = random(0, 1);
    this.vy = random(6, 2);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 1;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 4, 4);
  }
}
