//Citation: Garrit's bouncy ball code recordings as base.



let pos;
let ballFill = color(255);
// let y = 0;
let synth;
let ySpeed;

window.addEventListener("load", () => {
  synth = new Tone.MonoSynth().toDestination();
});


function setup() {
  createCanvas(600, 400);
  pos = createVector(200, 0);
  ballFill = color(255);
  xSpeed = random([8, -8]);
  ySpeed = random([8, -8]);
}


window.addEventListener("click", () => {
  Tone.start();
});

function draw() {
  background(0);
  // strokeWeight(2);
  // stroke(255);
  fill(ballFill);
  ellipse(pos.x, pos.y, 60, 60);

  // if (pos.y > height) {
  //   ySpeed *= -1;
  //   ballFill = color(random(255), random(255), random(255));
  // }

  if (pos.y < 0 || pos.y > height) {
    ySpeed *= -1;
    ballFill = color(random(255), random(255), random(255));
    synth.triggerAttackRelease("C4", "8n");
  }
  if (pos.x < 0 || pos.x > width) {
    xSpeed *= -1;
    ballFill = color(random(255), random(255), random(255));
    synth.triggerAttackRelease("A3", "5n");
  }
  // if (pos.x > width) {
  //   xSpeed *= -1;
  //   ballFill = color(random(255), random(255), random(255));
  // }

  pos.y = pos.y + ySpeed;
  pos.x = pos.x + xSpeed;
}

