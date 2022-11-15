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

var htitle = document.getElementById('header-title');

console.log(htitle);
htitle.textContent='Hello';

htitle.innerHTML='<h3>Heeee</h3>';
htitle.style.borderBottom = 'solid 3px #111899';
var header = document.getElementById('main-header');
header.style.borderBottom="2px solid #111799";

var addItems = document.getElementById('addItems');

addItems.style.color = '#00FF00';
addItems.style.fontWeight='bold';
console.log(addItems);

