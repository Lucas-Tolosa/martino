async function productos(){
var productos = document.querySelector("#container1");
productos.innerHTML="";
await fetch("http://localhost:8080/Productos/todos").then(Response=>Response.text().then(texto => 
{   const txt = JSON.parse(texto);
    for(let x =0; x<txt.length;x++){
        productos.innerHTML += (` <div class="caja" id="${txt[x].nombre}">${txt[x].nombre}
                <button onclick="agregar(${txt[x].id})" class="btn-agregar" >agregar</button>
                <p class="stock">Stock: ${txt[x].stock} </p>
            </div>`);           
    }
document.body.appendChild(productos);
}
).catch(error => console.error('Error:',error)));
cargarCarrito();
var can = document.createElement("div");
can.id= "carrito1";
document.body.appendChild(can);
}
