var productos = document.createElement("p");
function stock(nombre){

fetch("http://localhost:8080/Productos/{nombre}").then(Response=>Response.text().then(texto => 
{   var sk = texto.at(5);
    productos.innerHTML= sk;
    
document.body.appendChild(productos);}

).catch(error => console.error('Error:',error)));
}
