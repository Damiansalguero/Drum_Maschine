function playSound(e) {
  const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`);
  if (!audio) return; // this lie prevents the function from running at all
  audio.currentTime = 0; //rewind to the start of the sound, so keys can be hit repeatedly
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it is not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
