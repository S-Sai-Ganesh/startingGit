// //Traversing the DOM \\
var itemsList = document.querySelector('#items');
//1.
// console.log(itemsList.parentElement);

// itemsList.parentElement.style.backgroundColor = 'green';

//2.
// console.log(itemsList.lastElementChild);
// itemsList.lastElementChild.textContent = 'im last';

//3.
// console.log(itemsList.lastChild);

//5.
// console.log(itemsList.firstElementChild);
//6.
// console.log(itemsList.firstChild);
//7.
// console.log(itemsList.nextSibling);
//8.
// console.log(itemsList.nextElementSibling);
//9.
// console.log(itemsList.previousSibling);
//10.
// console.log(itemsList.previousElementSibling);



// //4. //11.
// var createChild = document.createElement('li');
// //12.
// createChild.className = 'list-group-item';
// //13.
// var createChildText = document.createTextNode("Item 5");
// //14.
// createChild.appendChild(createChildText);


// 1. 

var h1Tag = document.createElement('h1');

var h1Text = document.createTextNode('Hello');

h1Tag.appendChild(h1Text);

var headTag = document.querySelector('.container');
var itemLister = document.querySelector('#header-title');
// console.log(itemLister);

headTag.insertBefore(h1Tag, itemLister);

//2.

var ptag = document.createElement('p');

var ptext = document.createTextNode('hello');

ptag.appendChild(ptext);


var ulList = document.querySelector('#items');

var firstitem = document.querySelector('.list-group-item');

ulList.insertBefore(ptag, firstitem);


