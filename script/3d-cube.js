// Initial angles of rotation
let angleX = 0;
let angleY = 0;
let cubeSize =
  window.innerHeight > window.innerWidth
    ? window.innerWidth / 5
    : window.innerHeight / 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth(8);
}

function draw() {
  background(255, 246, 240);
  noStroke();

  // Set the rotation of the cube based on mouse movement
  angleX = map(mouseY, 0, height, -PI, PI);
  angleY = map(mouseX, 0, width, -PI, PI);

  // Rotate the camera to look at the center of the sketch
  rotateX(angleX);
  rotateY(angleY);

  // Draw the cube with different colors on each side
  fill(color("#e76f51"));
  beginShape();
  vertex(-cubeSize / 2, -cubeSize / 2, -cubeSize / 2); // Front face
  vertex(cubeSize / 2, -cubeSize / 2, -cubeSize / 2);
  vertex(cubeSize / 2, cubeSize / 2, -cubeSize / 2);
  vertex(-cubeSize / 2, cubeSize / 2, -cubeSize / 2);
  endShape(CLOSE);

  fill(color("#f4a261"));
  beginShape();
  vertex(-cubeSize / 2, -cubeSize / 2, cubeSize / 2); // Back face
  vertex(cubeSize / 2, -cubeSize / 2, cubeSize / 2);
  vertex(cubeSize / 2, cubeSize / 2, cubeSize / 2);
  vertex(-cubeSize / 2, cubeSize / 2, cubeSize / 2);
  endShape(CLOSE);

  fill(color("#e9c46a"));
  beginShape();
  vertex(-cubeSize / 2, -cubeSize / 2, -cubeSize / 2); // Left face
  vertex(-cubeSize / 2, -cubeSize / 2, cubeSize / 2);
  vertex(-cubeSize / 2, cubeSize / 2, cubeSize / 2);
  vertex(-cubeSize / 2, cubeSize / 2, -cubeSize / 2);
  endShape(CLOSE);

  fill(color("#8ab17d"));
  beginShape();
  vertex(cubeSize / 2, -cubeSize / 2, -cubeSize / 2); // Right face
  vertex(cubeSize / 2, -cubeSize / 2, cubeSize / 2);
  vertex(cubeSize / 2, cubeSize / 2, cubeSize / 2);
  vertex(cubeSize / 2, cubeSize / 2, -cubeSize / 2);
  endShape(CLOSE);

  fill(color("#2a9d8f"));
  beginShape();
  vertex(-cubeSize / 2, -cubeSize / 2, -cubeSize / 2); // Top face
  vertex(-cubeSize / 2, -cubeSize / 2, cubeSize / 2);
  vertex(cubeSize / 2, -cubeSize / 2, cubeSize / 2);
  vertex(cubeSize / 2, -cubeSize / 2, -cubeSize / 2);
  endShape(CLOSE);

  fill(color("#264653"));
  beginShape();
  vertex(-cubeSize / 2, cubeSize / 2, -cubeSize / 2); // Bottom face
  vertex(-cubeSize / 2, cubeSize / 2, cubeSize / 2);
  vertex(cubeSize / 2, cubeSize / 2, cubeSize / 2);
  vertex(cubeSize / 2, cubeSize / 2, -cubeSize / 2);
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// Fullscreen mode
window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
