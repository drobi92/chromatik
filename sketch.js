
let intervals = [
  { quality: "Unison", name: "unison" },
  { quality: "Minor", name: "minor 2nd" },
  { quality: "Major", name: "major 2nd" },
  { quality: "Minor", name: "minor 3rd" },
  { quality: "Major", name: "major 3rd" },
  { quality: "Perfect", name: "perfect 4th" },
  { quality: "Augmented", name: "tritone" },
  { quality: "Perfect", name: "perfect 5th" },
  { quality: "Minor", name: "minor 6th" },
  { quality: "Major", name: "major 6th" },
  { quality: "Minor", name: "minor 7th" },
  { quality: "Major", name: "major 7th" },
  { quality: "Octave", name: "octave" }
];


let colors = [
  [163, 0, 0],      // unison () 
  [242, 0, 0],    // minor 2nd ()
  [255, 0, 0],  // major 2nd () 
  [255, 79, 0],  // minor 3rd () 
  [255, 207, 0],    // major 3rd ()  
  [198, 255, 0],  // perfect 4th () 
  [0, 255, 0],    // tritone ()  
  [0, 255, 146],  // perfect 5th ()
  [0, 178, 255],  // minor 6th () 
  [0, 40, 255],  // major 6th ()  
  [102, 0, 255], // minor 7th ()
  [129, 0, 169],// major 7th ( ) 
  [0, 0, 0] // octave ()
];
let selectedQuality = null;

let correctInterval;
let score = 0;
let osc;
let osc2;
function setup() {
  createCanvas(700, 700);
  textAlign(CENTER, CENTER);
  textSize(32);
  osc = new p5.Oscillator(); // create a new oscillator
  osc.setType('sine'); // set oscillator type
  reset();
  
  
  //added replay button
  replayButton = createButton('Replay Interval');
  replayButton.position(width/2 - replayButton.width/2, height - 100);
  replayButton.mousePressed(playInterval);
  
  
   replayButton2 = createButton('Replay Interval Consecutively')
   replayButton2.position(width/2 - replayButton2.width/2 + 200, height - 100);
   replayButton2.mousePressed(playIntervalCons);
}


function draw() {
  background(220);
  let majorRowY = 200;
  let minorRowY = 300;
  let otherRowY = 400;
  let majorCounter = 0;
  let minorCounter = 0;
  let otherCounter = 0;
  let keyCodes = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];

  for (let i = 0; i < intervals.length; i++) {
    if (selectedQuality === null || intervals[i].quality === selectedQuality) {
      fill(colors[i]);
    } else {
      fill(255);
    }

    let ellipseX, ellipseY;

    if (intervals[i].quality === "Major") {
      ellipseX = majorCounter * 50 + 50;
      ellipseY = majorRowY;
      ellipse(ellipseX, ellipseY, 40);
      majorCounter++;
    } else if (intervals[i].quality === "Minor") {
      ellipseX = minorCounter * 50 + 50;
      ellipseY = minorRowY;
      ellipse(ellipseX, ellipseY, 40);
      minorCounter++;
    } else {
      ellipseX = otherCounter * 50 + 50;
      ellipseY = otherRowY;
      ellipse(ellipseX, ellipseY, 40);
      otherCounter++;
    }

    // Display keyCode inside the ellipse
    fill(0);
    text(keyCodes[i], ellipseX, ellipseY);
  }

  text("You've selected " + selectedQuality, width / 2, height - 600);
//  text(correctInterval.quality, width / 2, height - 500);
  text("Score: " + score, width / 2, height - 50);
  console.log(correctInterval.name);
}


  

// function draw() {
//   background(220);
//   for (let i = 0; i < intervals.length; i++) {
//     if (selectedQuality === null || intervals[i].quality === selectedQuality) {
//       fill(colors[i]);
//     } else {
//       fill(220);
//     }
//     ellipse(i * 50 + 50, 300, 40);
//   }
//    text("You've selected " + selectedQuality, width/2, height -600);
//   text(correctInterval.quality, width / 2, height - 500);
//   text("Score: " + score, width / 2, height - 50);
//   console.log(correctInterval.name);
// }



function keyPressed() {
  if (key === 'u') {
  selectedQuality = 'Unison';
} else if (key === 'n') {
  selectedQuality = 'Minor';

} else if (key === 'm') {
  selectedQuality = 'Major';

} else if (key === 't') {
  selectedQuality = 'Augmented';
  

} else if (key === 'o') {
  selectedQuality = 'Octave';

} else if (key === 'p'){
  selectedQuality = 'Perfect';
}

  
  let selection = -1;
  if (keyCode === 192) { // 1
    selection = 0;
  } else if (keyCode === 49) { // 2
    selection = 1;
  } else if (keyCode === 50) { // 3
    selection = 2;
  } else if (keyCode === 51) { // 4
    selection = 3;
  } else if (keyCode === 52) { // 5
    selection = 4;
  } else if (keyCode === 53) { // 6
    selection = 5;
  } else if (keyCode === 54) { // 7
    selection = 6;
  } else if (keyCode === 55) { // 8
    selection = 7;
  } else if (keyCode === 56) { // 9
    selection = 8;
  } else if (keyCode === 57) { // 0
    selection = 9;
  } else if (keyCode === 48) { // -
    selection = 10;
  } else if (keyCode === 189) { // =
    selection = 11;
  } else if (keyCode === 187){
    selection = 12;
  }
  
  if (intervals[selection] === correctInterval && correctInterval.quality === selectedQuality) {

    if (intervals[selection] === correctInterval) {
      score++;
      reset();
    } else {
      score--;
    }
  }
}

// function mouseClicked() {
//   if (mouseY > 250 && mouseY < 350) {
//     for (let i = 0; i < intervals.length; i++) {
//       let x = i * 50 + 50; // x position of ellipse
//       let y = 300; // y position of ellipse
//       let radius = 20; // radius of ellipse
//       let distance = dist(mouseX, mouseY, x, y); // distance between mouse click and center of ellipse
//       if (distance < radius) {
//         let selection = i;
//         if (intervals[selection] === correctInterval) {
//           score++;
//           reset();
//         } else {
//           score--;
//         }
//       }
//     }
//   }
// }

function playIntervalCons(){
  let index = intervals.indexOf(correctInterval);
  let [rootFrequency, intervalFrequency] = getFrequency(index);
  oscRoot = new p5.Oscillator(); // create a new oscillator for the root frequency
  oscInterval = new p5.Oscillator(); // create a new oscillator for the interval frequency
  oscRoot.setType('sine'); // set oscillator type to a sine wave
  oscInterval.setType('sine'); // set oscillator type to a sine wave
  oscRoot.freq(rootFrequency); // set oscillator frequency to root frequency
  oscInterval.freq(intervalFrequency); // set oscillator frequency to interval frequency
  oscRoot.start(); // start the oscillator for the root frequency
  oscRoot.amp(0, 0.5); // mute the root frequency oscillator after 500ms
  setTimeout(function() {
    oscRoot.stop(); // stop the oscillator for the root frequency after 500ms
    oscInterval.start(); // start the oscillator for the interval frequency
    oscInterval.amp(0, 0.5); // mute the interval frequency oscillator after 500ms
  }, 500);
}

function playInterval() {
  let index = intervals.indexOf(correctInterval);
  let [rootFrequency, intervalFrequency] = getFrequency(index);
  oscRoot = new p5.Oscillator(); // create a new oscillator for the root frequency
  oscInterval = new p5.Oscillator(); // create a new oscillator for the interval frequency
  osc2 = new p5.Oscillator(); // create a new oscillator for osc2
  oscRoot.setType('sine'); // set oscillator type to a sine wave
  oscInterval.setType('sine'); // set oscillator type to a sine wave
  osc2.setType('sine'); // set oscillator type to a sine wave
  oscRoot.freq(rootFrequency); // set oscillator frequency to root frequency
  oscInterval.freq(intervalFrequency); // set oscillator frequency to interval frequency
  //osc2.freq(intervalFrequency); // set oscillator frequency to interval frequency
  oscRoot.start(); // start the oscillator for the root frequency
  oscInterval.start(); // start the oscillator for the interval frequency
 // osc2.start(); // start the oscillator for osc2
  setTimeout(function() {
    oscRoot.stop(); // stop the oscillator for the root frequency after 500ms
    oscInterval.stop(); // stop the oscillator for the interval frequency after 500ms
    //osc2.stop(); // stop the oscillator for osc2 after 500ms
  }, 500);
}




function reset() {
  correctInterval = random(intervals);
  let index = intervals.indexOf(correctInterval);
  let [rootFrequency, intervalFrequency] = getFrequency(index);
  oscRoot = new p5.Oscillator(); // create a new oscillator for the root frequency
  oscInterval = new p5.Oscillator(); // create a new oscillator for the interval frequency
  oscRoot.setType('sine'); // set oscillator type to a sine wave
  oscInterval.setType('sine'); // set oscillator type to a sine wave
  oscRoot.freq(rootFrequency); // set oscillator frequency to root frequency
  oscInterval.freq(intervalFrequency); // set oscillator frequency to interval frequency
  oscRoot.start(); // start the oscillator for the root frequency
  oscInterval.start(); // start the oscillator for the interval frequency
  setTimeout(function() {
    oscRoot.stop(); // stop the oscillator for the root frequency after 500ms
    oscInterval.stop(); // stop the oscillator for the interval frequency after 500ms
  }, 500);
  
}




function getFrequency(intervalIndex) {
  let rootFrequency = 440; // A4
  let semitoneRatio = pow(2, 1/12); // 12-TET
  let intervalRatio = pow(semitoneRatio, intervalIndex);
  let intervalFrequency = rootFrequency * intervalRatio;
  return [rootFrequency, intervalFrequency];
}