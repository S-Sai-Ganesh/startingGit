const expense = document.getElementById('expense');
const amount = document.getElementById('amount');
const description = document.getElementById('description');
const category = document.getElementById('category');

expense.addEventListener('submit', onSubmit);

if (document.readyState == "loading" ) {
    Object.keys(localStorage).forEach((key) => {
        stringTracker = localStorage.getItem(key);
        parseTracker = JSON.parse(stringTracker);
        addLine(parseTracker);
        });
}

function onSubmit(e){
    e.preventDefault();
    
    expenseObj={
        amount: amount.value,
        description: description.value,
        category: category.value
    }

    localStorage.setItem(expenseObj.description,JSON.stringify(expenseObj));

    newLine = JSON.parse(localStorage.getItem(expenseObj.description));
    addLine(newLine);
}

function addLine(newLine){
    const ul = document.getElementById('tracker');
    const li = document.createElement('li');

    li.appendChild(
        document.createTextNode(newLine.amount + '-' + newLine.category + '-' + newLine.description));


const delBtn = document.createElement('input');
delBtn.id='delete';
delBtn.type='button';
delBtn.value='Delete Expense';
delBtn.addEventListener('click', ()=> {
    localStorage.removeItem(expenseObj.description);
    li.remove();
});
li.appendChild(delBtn);

const editBtn = document.createElement('input');
    editBtn.id='edit';
    editBtn.type='button';
    editBtn.value='Edit Expense';
    editBtn.addEventListener('click', ()=> {
        document.getElementById('amount').value = expenseObj.amount;
        document.getElementById('description').value = expenseObj.description;
        document.getElementById('category').value = expenseObj.category;
        localStorage.removeItem(expenseObj.description);
        li.remove();
    });
    li.appendChild(editBtn);

ul.appendChild(li);
}

