const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
btnStop.disabled = true;
let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timer = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(timer);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
