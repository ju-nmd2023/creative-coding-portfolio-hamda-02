//Citation: Mix of Garrite's noiseexample lecture recording and coding train youtube channel
//Citation: snowflakes https://www.youtube.com/watch?v=UcdigVaIYAk&t=72s

let SnowFlakes = [];

let inc = 0.002;
let start = 0;
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(10, 15, 40);

  const originalY = 100; //the base line
  const divider = 170;
  // noiseSeed(1);

  for (let i = 0; i < 2; i++) {
    let xoff = start + i * 4000;
    let baseY = originalY + i * 200 + noise(xoff) * 110;
    noStroke();

    if (i === 0) {
      fill(0);
    } else {
      fill(30, 17, 14);
    }

    beginShape();

    for (let x = 0; x < innerWidth; x++) {
      const y = baseY + noise(x / divider) * 300;
      vertex(x, y);
      xoff += inc;
    }

    vertex(innerWidth, innerHeight);
    vertex(0, innerHeight);
    endShape();
  }
  start += inc;
  // noLoop(); //snow-----
  for (let i = 0; i < 6; i++) {
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
}

class SnowFlake {
  constructor() {
    this.x = random(innerWidth);
    this.y = 0;
    this.vx = random(-5, -1);
    this.vy = random(0, 20);
    this.alpha = 255;
    // this.color = [random(255), random(255), random(255)];
  }

  finished() {
    return this.alpha < 0;
  }
  update() {
    this.x += this.vx; //my snowfales falling
    this.y += this.vy; // sideways drift
    this.alpha -= 1.7;
    // this.x += sin(frameCount * 0.01 + this.y * 0.01) * 2;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    circle(this.x, this.y, 2);
  }
}
