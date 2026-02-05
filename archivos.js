
async function productos(){
var productos = document.createElement("div");
productos.className=("container1");
await fetch("http://localhost:8080/Productos/todos").then(Response=>Response.text().then(texto => 
{   const txt = JSON.parse(texto);
    
    for(let x =0; x<txt.length;x++){
        productos.innerHTML += (` <div class="caja" id="${txt[x].nombre}">${txt[x].nombre}
                <button onclick="agregar(${txt[x].id})" class="btn-agregar" >agregar</button>
                <p>Stock: ${txt[x].stock} </p>
            </div>`);
         
          cargarCarrito(txt[x]);
    }
    console.log(txt[0].id);
    
document.body.appendChild(productos);

copiar();
}
).catch(error => console.error('Error:',error)));

var can = document.createElement("div");
can.id= "carrito1";

document.body.appendChild(can);
// crea un canasto para que se pueda agarrar el carrito
}

