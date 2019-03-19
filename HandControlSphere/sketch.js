function setup() {
  // put setup code here
  createCanvas(1280, 720, WEBGL);
}



var posX, posY, posZ;
var pos = [0,0,0];


Leap.loop(function(frame){
  if (frame.hands === undefined || frame.hands.length === 0 ) {
    var handsLength = 0;
    posX = posY = posZ = 0;
  }
  else {
    var handsLength = frame.hands.length;
    var hand = frame.hands[0];
    var posReal = hand.palmPosition;
    posX = hand.palmPosition[0]*2;
    posY = (hand.palmPosition[1]-100) * -2;
    posZ = hand.palmPosition[2]*3;
  }
})




function draw() {
  // put drawing code here
  background(0);

  normalMaterial();
  push();
  translate(posX, posY, posZ);
  console.log(posX);
  sphere(100);
  pop();

}
