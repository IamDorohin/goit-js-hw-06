const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputBlurHandler);

function inputBlurHandler(event) {
    const onInput = event.currentTarget;
    const inputLength = Number(onInput.dataset.length);

    if(onInput.value.length === inputLength) {
        onInput.classList.remove('invalid');
        onInput.classList.add('valid');
    } else {
        onInput.classList.remove('valid');
        onInput.classList.add('invalid');
    }

}







