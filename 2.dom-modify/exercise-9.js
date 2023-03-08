let divs = document.querySelectorAll('.fn-insert-here');
for (let index = 0; index < divs.length; index++) {
let p = document.createElement('p');
p.textContent = 'Voy dentro!';  
divs[index].appendChild(p);
}
