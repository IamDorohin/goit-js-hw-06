// Напиши скрипт управління формою логіна.

// + 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// + 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// + 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//    що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//    де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//    Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// const refs = {
//     formRef: document.querySelector('.login-form'),
//     inputsRef: document.querySelectorAll('form input'),
//     buttonRef: document.querySelector('form button'),
// }

const formRef = document.querySelector('.login-form');
const inputsRef = document.querySelectorAll('form input');

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;

    if(emailValue === '' || passwordValue === '') {
        window.alert('Упс...всі поля форми мають бути заповнені!')
    };
  
    console.log( {email: emailValue, password: passwordValue} );

    formRef.reset();
}
 
 





