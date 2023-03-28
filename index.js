const morseButton = document.querySelector(".morse-button");
const volumeSlider = document.querySelector("#volume-slider");
const volumeAmt = document.querySelector(".volume-amt");

const tone = new Audio("tone.wav");
tone.volume = 0.5;

volumeSlider.addEventListener("input", () => {
  volumeAmt.innerHTML = `${volumeSlider.value}%`;
  tone.volume = parseInt(volumeSlider.value) / 100;
});

function handleKeyDown(e) {
  morseButton.classList.add("red-bg");
  tone.play();
}

function handleKeyUp(e) {
  morseButton.classList.remove("red-bg");
  tone.pause();
}

document.addEventListener("keydown", (e) =>
  e.key === " " ? handleKeyDown(e) : null
);
document.addEventListener("keyup", (e) =>
  e.key === " " ? handleKeyUp(e) : null
);
