
let btn = document.createElement('button');
btn.id = 'btnToClick';
btn.textContent = 'boton';
document.body.appendChild(btn);
btn.addEventListener('click', function(event) {
console.log(event);});