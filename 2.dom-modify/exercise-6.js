const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let lista = document.createElement("ul");

for (let index = 0; index < apps.length; index++) {
    const element = apps[index];
    let articulo = document.createElement("li");
    articulo.textContent = apps[index];
    lista.appendChild(articulo);
}
document.body.appendChild(lista);


