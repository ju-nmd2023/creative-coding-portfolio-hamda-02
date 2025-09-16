//citation: Mix of Garrite's noiseexample lecture recording and coding train youtube channel

let inc = 0.002;
let start = 0;
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(23, 25, 59);

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

    push();
    fill(255,133);
    ellipse(300, 100, 100, 100);
    pop();
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
  // noLoop();
}
