const keysUI = document.querySelectorAll('.key');
const whiteKeyUI = document.querySelectorAll('.key.white');
const blackKeyUI = document.querySelectorAll('.key.black');
// for white buttons on keyboard
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
// for black buttons on keyboard
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const playNote = key => {
  let noteAudio = document.getElementById(key.dataset.note);
  // replay sound when clicked twice
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
};

// Click events
keysUI.forEach(key => {
  key.addEventListener('click', () => playNote(key));
});

// keyboard events
document.addEventListener('keydown', e => {
  // if the same buttons clicked more times
  if (e.repeat) return;
  // get keys from event
  const key = e.key;
  // extract key from array
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  // check this key is existing or not  otherwise go back
  if (whiteKeyIndex > -1) playNote(whiteKeyUI[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeyUI[blackKeyIndex]);
});
