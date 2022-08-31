// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const defaultRange = document.querySelector('#font-size-control');

defaultRange.addEventListener('input', onDefaultRangeInput);

function onDefaultRangeInput(event) {
    const spanEL = document.querySelector('#text');
    spanEL.style.fontSize = event.currentTarget.value + 'px';
}



// const inputEl = document.querySelector('#font-size-control');
// const spanEl = document.querySelector('#text');


// inputEl.addEventListener('input', onInput);

// function onInput(event) {
//     spanEl.style.fontSize = event.currentTarget.value + 'px'
// }