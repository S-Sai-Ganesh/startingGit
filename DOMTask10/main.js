const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {

    e.preventDefault();

    myObj = {
        name: nameInput.value,
        email: emailInput.value
    }
    myObj_string = JSON.stringify(myObj);

    localStorage.setItem('user', myObj_string);

    myObj_obj = JSON.parse(localStorage.getItem('user'));
    console.log(myObj_obj);

}  