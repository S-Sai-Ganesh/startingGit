// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // console.log(document.title=121354)
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// console.log(document.all[10]);
// document.all[10].title="jhdfkjhbnk"
// console.log(document.forms);
// console.log(document.links);


// //Get Elemnts by Id
// var htitle = document.getElementById('header-title');
// console.log(htitle);
// htitle.textContent='Hello';

// htitle.innerHTML='<h3>Heeee</h3>';
// htitle.style.borderBottom = 'solid 3px #111899';
// var header = document.getElementById('main-header');
// header.style.borderBottom="2px solid #111799";

// var addItems = document.getElementById('addItems');

// addItems.style.color = '#00FF00';
// addItems.style.fontWeight='bold';
// console.log(addItems);

// Get elemnts by class name////
var items = document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor = 'green';

// for (let index = 0; index < items.length; index++) {
//     items[index].style.fontWeight = 'bold';
// }


//Get Elements by Tag Name

var liTag = document.getElementsByTagName('li');

// liTag[2].style.backgroundColor = 'green';

for (let index = 0; index < liTag.length; index++) {
    liTag[index].style.color = 'red';
}

liTag[liTag.length-1].style.backgroundColor = '#F4F444';

for (let index = 0; index < items.length; index++) {
    items[index].style.backgroundColor = '#000000';
    
}
