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

    axios.post('https://crudcrud.com/api/7adb60561b354135b08400fd5e4f1d9e/appointmentBooking',myObj)
        .then((response) => {
            addNewLineElement(response.data)
        }).catch((err) => {
            document.body.innerHTML+= '<h6> Submit failed try again</h6>'
            console.log(err);      
        }
    );
}  
if (document.readyState == "loading" ) {
    
    axios.get('https://crudcrud.com/api/7adb60561b354135b08400fd5e4f1d9e/appointmentBooking')
        .then((result) => {
            result.data.forEach(element => {
                addNewLineElement(element);
            });
        }).catch((err) => {
            console.error(err);
            document.body.innerHTML+= '<h6> Failed to retrieve data from server</h6>'
        }
    );
}


function addNewLineElement(detailsOfPeople){

    const ul=document.getElementById('users');
    const li=document.createElement('li');
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
        localStorage.removeItem(detailsOfPeople.name);
        li.remove();
    });
    editBtn.style.border = '2px solid green';
    li.appendChild(editBtn);

    const delBtn = document.createElement('input');
    delBtn.id='delete';
    delBtn.type='button';
    delBtn.value='delete';
    delBtn.addEventListener('click', ()=> {
        axios.delete(`https://crudcrud.com/api/7adb60561b354135b08400fd5e4f1d9e/appointmentBooking/${detailsOfPeople._id}`)
        li.remove();
    });
    delBtn.style.border = '2px solid red';
    li.appendChild(delBtn);
    ul.appendChild(li);
}

