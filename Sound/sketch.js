
var cnv, soundFile, fft, peakDetect;
var ellipseWidth = 10;

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
  textAlign(CENTER);

  soundFile = loadSound('natureland.mp3');

 
  fft = new p5.FFT();

  peakDetect = new p5.PeakDetect(4000, 12000, 0.2);

}

function draw() {
  background(0);
  text('click to play/pause', width/2, height/4);

  
  fft.analyze();
  peakDetect.update(fft);

  if ( peakDetect.isDetected ) {
    ellipseWidth = 300;
  } else {
    ellipseWidth *= 0.95;
  }

  ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
}


function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (soundFile.isPlaying() ) {
      soundFile.stop();
    } else {
      soundFile.play();
    }
  }
}