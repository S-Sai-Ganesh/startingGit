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

    localStorage.setItem(myObj.name,JSON.stringify(myObj));

    detailsOfPeople = JSON.parse(localStorage.getItem(myObj.name));
    addNewLineElement(detailsOfPeople);
}  


function addNewLineElement(user){
    const parentNode = document.getElementById("users");
    const childHTML = `<li> ${user.name} - ${user.email}</li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
