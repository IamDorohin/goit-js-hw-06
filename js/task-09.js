// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const textValue = document.querySelector('.color');

buttonRef.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textValue.textContent = getRandomHexColor();
}