// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів
// очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  containerRef: document.querySelector('#boxes'),
  inputRef: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};


refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const newContainersArray = [];
  amount = refs.inputRef.value;

  for (let i = 0; i <= amount; i+=1) {
    const newContainer = document.createElement('div');
    newContainer.style.width = `${30+i*10}px`;
    newContainer.style.height = `${30+i*10}px`;
    newContainer.style.backgroundColor = getRandomHexColor();
    
    newContainersArray.push(newContainer);
  }

  refs.containerRef.append(...newContainersArray);
}

function destroyBoxes(){
refs.containerRef.innerHTML = '';
}