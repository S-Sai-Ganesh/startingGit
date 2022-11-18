const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {

    e.preventDefault();

    console.log(nameInput.value);

    console.log(emailInput.value);
    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('email', emailInput.value);
}  