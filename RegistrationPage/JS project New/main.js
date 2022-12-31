const amount = document.getElementById('amount');
const description = document.getElementById('description');
const category = document.getElementById('category');

const seller = document.getElementById('seller');

seller.addEventListener('submit', onSubmitFun);

function onSubmitFun(e){
    e.preventDefault();
    
    let sellerObj={
        amount:amount.value,
        description:description.value,
        category:category.value
    }

    axios.post('https://crudcrud.com/api/cf12a23ccb704d4ea6a0268e6d482819/seller',sellerObj)
        .then((response) => {
            addNewLine(response.data)
        }).catch((err) => {
            document.body.innerHTML+='<h6> Submit Failed Error: in server </h6>'
            console.log(err);
        });
}

window.addEventListener('load', ()=> {
    axios.get('https://crudcrud.com/api/cf12a23ccb704d4ea6a0268e6d482819/seller')
        .then((result) => {
            result.data.forEach(element => {
                addNewLine(element);
            });
        }).catch((err) => {
            console.error(err);
            document.body.innerHTML+= '<h6> Error: Failed to load data from server</h6>'
        });
});

function addNewLine(sellerObj) {
    const ulElectronic = document.getElementById('electronic');
    const ulFood = document.getElementById('food');
    const ulSkinCare = document.getElementById('skincare');

    const li = document.createElement('li');

    li.appendChild(
        document.createTextNode('$' + sellerObj.amount + ' -Category:' + sellerObj.category + ' -Description:' + sellerObj.description + ' ')
    );

    const delBtn = document.createElement('input');
    delBtn.id='delete';
    delBtn.type='button';
    delBtn.value='delete';
    delBtn.addEventListener('click', ()=> {
        axios.delete(`https://crudcrud.com/api/cf12a23ccb704d4ea6a0268e6d482819/seller/${sellerObj._id}`)
        li.remove();
    });
    delBtn.style.border = '2px solid red';
    delBtn.style.marginRight = '5px'
    li.appendChild(delBtn);

    if(sellerObj.category=='Electronics'){
        ulElectronic.appendChild(li);
    } else if(sellerObj.category=='Food'){
        ulFood.appendChild(li);
    } else if(sellerObj.category=='Skincare'){
        ulSkinCare.appendChild(li);
    }

}