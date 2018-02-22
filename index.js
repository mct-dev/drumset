// hide everything and show notification banner if on mobile
if (typeof window.orientation !== "undefined") {
  document.getElementsByClassName("keys")[0].classList.add("hide");
  document.getElementsByClassName("mobile-banner")[0].classList.add("show");
}
window.addEventListener("keydown", e => {
  // shift messes things up...
  if (e.key === "shift") {
    return;
  }
  var key = e.key == ":" ? ";" : e.key.toLowerCase();
  var audio = document.querySelector(`audio[data-key="${key}"]`);
  var keyElem = document.querySelector(`.key[data-key="${key}"]`);
  if (!audio) return; // if no audio element found with matching keyCode, just return (do nothing)
  if (e.repeat) return; // if key is repeating, don't keep repeating the sound.

  audio.currentTime = 0;
  audio.play().then(() => {});
  keyElem.classList.add("pressed");
});
window.addEventListener("keyup", e => {
  var key = e.key == ":" ? ";" : e.key.toLowerCase();
  var keyEl = document.querySelector(`.key[data-key="${key}"]`);
  if (!keyEl) return; // if no audio element found with matching keyCode, just return (do nothing)
  keyEl.classList.remove("pressed");
});
