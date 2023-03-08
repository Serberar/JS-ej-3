let parrafo=document.createElement('p');
parrafo.textContent= 'voy en medio!'
let div2 = document.querySelectorAll('div')[1];
let body = document.querySelector('body');
body.insertBefore(parrafo, div2);
