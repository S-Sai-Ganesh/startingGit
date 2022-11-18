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
if (document.readyState == "loading" ) {
    Object.keys(localStorage).forEach((key) => {
        stringifiedDetailsOfPeople = localStorage.getItem(key);
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        addNewLineElement(detailsOfPeople);
        });
    }


function addNewLineElement(detailsOfPeople){
    // const parentNode = document.getElementById("users");
    // const childHTML = `<li> ${user.name} - ${user.email}</li>`
    // parentNode.innerHTML = parentNode.innerHTML + childHTML;

    const ul=document.getElementById('users');
    const li=document.createElement('li');
    // li.appendChild(childHTML);
    li.appendChild(
        document.createTextNode(detailsOfPeople.name + " " + detailsOfPeople.email + " ")
      );

    const editBtn = document.createElement('input');
    editBtn.id='edit';
    editBtn.type='button';
    editBtn.value='Edit';
    editBtn.addEventListener('click', ()=> {
        document.getElementById('name').value = detailsOfPeople.name;
        document.getElementById('email').value = detailsOfPeople.email;
        li.remove();
    });
    editBtn.style.border = '2px solid green';
    li.appendChild(editBtn);

    const delBtn = document.createElement('input');
    delBtn.id='delete';
    delBtn.type='button';
    delBtn.value='delete';
    delBtn.addEventListener('click', ()=> {
        localStorage.removeItem(detailsOfPeople.name);
        li.remove();
    });
    delBtn.style.border = '2px solid red';
    li.appendChild(delBtn);
    ul.appendChild(li);
}

