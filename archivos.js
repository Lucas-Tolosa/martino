async function productos(){
var productos = document.querySelector("#container1");
productos.innerHTML="";
await fetch("http://localhost:8080/Productos/todos").then(Response=>Response.text().then(texto => 
{   const txt = JSON.parse(texto);
    for(let x =0; x<txt.length;x++){
        productos.innerHTML += (` <article class="caja">
                <div class=""><img src="fotos/${txt[x].nombre}.jpg" /></div>
                <div class="nombreProd"><p>${txt[x].nombre}</p></div>
                <div class="agregarProd"><button onclick="agregar(${txt[x].id})" class="btn-agregar" >Agregar</button></div>
                <div class="stockProd"><p class="stock">Stock: ${txt[x].stock} </p></div>
            </article>`);           
    }
}
).catch(error => console.error('Error:',error)));
cargarCarrito();
if(document.querySelector("#carrito1")){
var can = document.createElement("div");
can.id= "carrito1";
document.body.appendChild(can);
}

}
