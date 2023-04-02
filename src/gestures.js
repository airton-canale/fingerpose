const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const rockGesture = new GestureDescription("rock"); // ✊🏻
const paperGesture = new GestureDescription("paper"); // ✋🏻
const scissorsGesture = new GestureDescription("scissors"); // ✌🏻
const dontGesture = new GestureDescription("dont"); // 🙅🏻‍♂️
const rockAndRollGesture = new GestureDescription("rockandroll"); // 🤘🏻
const oneGesture = new GestureDescription("one"); // ☝🏻
const gunGesture = new GestureDescription("gun"); // 🔫





// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Scissors
//------------------------------------------------------------------------------

// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Dont 🙅🏻‍♂️
//------------------------------------------------------------------------------


for(const finger of Finger.all){
  dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8)


  dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0)

  dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0)

}

// Rock and Roll
//------------------------------------------------------------------------------

rockAndRollGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockAndRollGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);


rockAndRollGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

rockAndRollGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
rockAndRollGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rockAndRollGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

rockAndRollGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// one
//------------------------------------------------------------------------------

oneGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
oneGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);



oneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);


oneGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
oneGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
oneGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// gun
//------------------------------------------------------------------------------

gunGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gunGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

gunGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
gunGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
gunGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);



const gestures = [rockGesture, paperGesture, scissorsGesture, dontGesture, rockAndRollGesture, oneGesture, gunGesture];

export {gestures};
