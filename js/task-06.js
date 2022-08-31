// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur)
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо
// неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у
// вихідні файли завдання.

const targetInput = document.querySelector('#validation-input');

targetInput.addEventListener('blur', targetInputBlurHandler);

function targetInputBlurHandler(event) {
    const inputLength = Number(targetInput.dataset.length); // Приведення значення до числа
    
    if(event.currentTarget.value.length === inputLength) {
        targetInput.classList.add('valid');
    } else {
        targetInput.classList.add('invalid')
    };
}







