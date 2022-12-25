const expense = document.getElementById('expense');
const amount = document.getElementById('amount');
const description = document.getElementById('description');
const category = document.getElementById('category');
let editingExpenseId = null;

expense.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    let expenseObj = {
        amount: amount.value,
        description: description.value,
        category: category.value
    }

    if(editingExpenseId === null){
        axios.post('https://crudcrud.com/api/d044b44e260d485b9bbda4011edf87b1/expenses',expenseObj)
        .then((response) => {
            addNewLineElement(response.data)
        }).catch((err) => {
            document.body.innerHTML+= '<h6> Submit failed try again</h6>'
            console.log(err);      
        }
        );
    } else {
        axios.put(`https://crudcrud.com/api/d044b44e260d485b9bbda4011edf87b1/expenses/${editingExpenseId}`,expenseObj)
        .then((response) => {
            let res = JSON.parse(response.config.data);
            addNewLineElement(res);
        }).catch((err) => {
            document.body.innerHTML+= '<h6> Submit failed try again</h6>'
            console.log(err);      
        });
        editingExpenseId = null;
    }
}

if (document.readyState == "loading" ) {
    
    axios.get('https://crudcrud.com/api/d044b44e260d485b9bbda4011edf87b1/expenses')
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

function addNewLineElement(expenseDetails){
    const ul = document.getElementById('tracker');
    const li = document.createElement('li');

    li.appendChild(
        document.createTextNode('$' + expenseDetails.amount + ' - Category:' + expenseDetails.category + ' - Description:' + expenseDetails.description + ' ')
    );

    const delBtn = document.createElement('input');
    delBtn.id='delete';
    delBtn.type='button';
    delBtn.value='delete';
    delBtn.addEventListener('click', ()=> {
        axios.delete(`https://crudcrud.com/api/d044b44e260d485b9bbda4011edf87b1/expenses/${expenseDetails._id}`)
        li.remove();
    });
    delBtn.style.border = '2px solid red';
    delBtn.style.marginRight = '5px'
    li.appendChild(delBtn);
    // li.appendChild('<br>')
    const editBtn = document.createElement('input');
    editBtn.id='edit';
    editBtn.type='button';
    editBtn.value='Edit';
    editBtn.addEventListener('click', ()=> {
        document.getElementById('amount').value = expenseDetails.amount;
        document.getElementById('description').value = expenseDetails.description;
        document.getElementById('category').value = expenseDetails.category;
        li.remove();
        editingExpenseId = expenseDetails._id;
        console.log(editingExpenseId);
    });
    editBtn.style.border = '2px solid green';
    li.appendChild(editBtn);
    li.style.textDecoration = 'none';
    ul.appendChild(li);
}