const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email;
    const password = formElements.password;

    if(email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені!');
    }

    console.log( {email: email.value, password: password.value} );

    formEl.reset();
}

