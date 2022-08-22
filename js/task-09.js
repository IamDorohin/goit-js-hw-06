function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const textColorEL = document.querySelector(".color");
const bodyEl = document.body;

buttonEl.addEventListener("click", changeColorBody);

function changeColorBody() {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  textColorEL.textContent = randomColor;
}