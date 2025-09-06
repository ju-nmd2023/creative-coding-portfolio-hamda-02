//citation Garrite's noiseexample lecture recording
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  // background(172, 250, 224);
  background(176, 224, 230);

  const originalY = 300; //the base line
  const divider = 350;
  // noiseSeed(1);

  //Citation: chatgpt line 15-18
  let layerSpacing = 100;

  for (let i = 0; i < 4; i++) {
    let baseY = originalY - i * layerSpacing;
    fill(101, 67, 33, 140);
    noStroke();

    beginShape();

    for (let x = 0; x < innerWidth; x++) {
      // const y = originalY + Math.random() * 100;
      const y = baseY + noise(x / divider) * 400;
      vertex(x, y);
    }

    vertex(innerWidth, innerHeight);
    vertex(0, innerHeight);
    endShape();
  }
  noLoop();
}
