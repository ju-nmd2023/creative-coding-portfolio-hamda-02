//Citaion: follwed garrit's recrding noise example for Vera Molnár

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(4);
  rect(CENTER);
}

const size = 150;
const layers = 10;

function getRandomValue(pos, variance) {
  return pos + map(Math.random(), 0, 1, -variance, variance);
}

function drawLayers(x, y, size, layers) {
  const variance = size / 10;

  // rectMode(CENTER);
  for (let i = 0; i < layers; i++) {
    if (Math.random() > 0.8) {
      continue;
    }

    const originalSize = (size / layers) * i;
    const half = originalSize / 2;
    noStroke();
    fill([random(150, 255), random(150, 255), random(200, 255), random(150)]);
    beginShape();
    vertex(getRandomValue(x, variance), getRandomValue(y - half, variance));
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y + half, variance)
    );

    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y + half, variance)
    );

    endShape(CLOSE);
  }
}

function draw() {
  background(0);


  // drawLayers(100, 100, size, layers);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cellIndex = y * 10 + x;
      drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
    }
  }
  // noLoop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
