//Citation: Garrit's bouncy ball code recordings as base.

let pos;
let xSpeed, ySpeed;
let ballFill;
let synth;
let started = false;

function setup() {
  createCanvas(600, 400);
  pos = createVector(width / 2, height / 2);
  ballFill = color(255);
  xSpeed = random([16, -16]);
  ySpeed = random([16, -16]);
  noLoop();

  //Citation: tone.js not workingggg final help from Chatgpt Line 19-26
  // dynamically load Tone.js inside the sketch
  const toneScript = document.createElement("script");
  toneScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/tone/15.3.3/Tone.min.js";
  toneScript.onload = () => {
    synth = new Tone.MonoSynth().toDestination();
  };
  document.body.appendChild(toneScript);

  //my start button
  startBtn = createButton("Start");
  startBtn.position(innerWidth / 2 - 50, innerHeight / 2);
  startBtn.size(170, 60);
  startBtn.style("font-size", "24px");
  startBtn.style("color", "white");
  startBtn.style("background-color", "rgb(192, 207, 178)");
  startBtn.style("border", "none");
  startBtn.style("border-radius", "10px");
  startBtn.style("cursor", "pointer");
  startBtn.mousePressed(() => {
    Tone.start().then(() => {
      // await Tone.start();
      started = true;
      loop();
      startBtn.hide();
    });
  });
}

function draw() {
  if (!started) {
    background(255);
    return;
  }

  background(0);
  for (let i = 10; i < width; i++) {
    fill(ballFill);
    noStroke();
    ellipse(pos.x, pos.y, 60, 60);
  }
  // when ball vertically bounce
  if (pos.y < 0 || pos.y > height) {
    ySpeed *= -1;
    ballFill = color(random(255), random(255), random(255));
    synth.triggerAttackRelease("C3", "18n");
  }

  // when ball horizontally bounce
  if (pos.x < 0 || pos.x > width) {
    xSpeed *= -1;
    ballFill = color(random(255), random(255), random(255));
    synth.triggerAttackRelease("A3", "18n");
  }

  // here i'm updating position
  pos.x += xSpeed;
  pos.y += ySpeed;
}
