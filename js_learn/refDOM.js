// <html> = document.documentElement
// <body> = document.body
// <head> = document.head

let elem = document.body;
elem.childNodes[0] == elem.firstChild // and lastChild
for (let node of elem.childNodes) {
    console.log(node);
}
document.body.parentNode === document.documentElement
document.head.nextSibling
document.previousSibling

elem = document.getElementById('elem'); // Looks for unique in whole doc
elem.style.background = 'red';

//// querySelectAll
// <ul>
//   <li>The</li>
//   <li>test</li>
// </ul>
// <ul>
//   <li>has</li>
//   <li>passed</li>
// </ul>

for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
}
// querySelector for first elem only

//// matches
// <a href="http://example.com/file.zip">...</a>
// <a href="http://ya.ru">...</a>

for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
        alert("The archive reference: " + elem.href);
    }
}

let divs = document.getElementsByTagName('div');
