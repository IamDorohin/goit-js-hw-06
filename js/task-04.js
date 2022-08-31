// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати
// його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй
// її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', decrementBtnClickHandler);
incrementBtn.addEventListener('click', incrementBtnClickHandler);

function decrementBtnClickHandler() {
    counterValue -= 1;

    // Варіант 1 синхронної зміни значення лічильника
    document.getElementById('value').textContent = counterValue;
}

function incrementBtnClickHandler() {
    counterValue += 1;

    // Варіант 2 синхронної зміни значення лічильника
    const incrementValue = document.querySelector('#value');
    incrementValue.textContent = counterValue;
}
