//Citaion: follwed garrit's recrding noise example for Vera Molnár

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(7);
  rect(CENTER);
}

const size = 160;
const layers = 10;

function getRandomValue(pos, variance) {
  return pos + random(-variance, variance);
}



function drawLayers(x, y, size, layers) {
  const variance = size / 6;

  // rectMode(CENTER);
  for (let i = 0; i < layers; i++) {
    if (Math.random() > 0.4) {
      continue;
    }

    // const originalSize = (size / layers) * i;
    // const half = originalSize / 2;

    const layerSize = size * 0.1 + (size / layers) * i;

    noStroke();
    //Citaion : chatgpt recommened using gradient instead of random alpha
    fill(random(255), random(255), random(255), map(i, 0, layers, 60, 150));

    ellipse(
      getRandomValue(x, variance),
      getRandomValue(y, variance),
      layerSize,
      layerSize
    );
  }
}

function draw() {
  background(255);

  // drawLayers(100, 100, size, layers);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      // const cellIndex = y * 10 + x;
      drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
    }
  }
  // noLoop();
}
