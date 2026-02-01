
function productos(){
var productos = document.createElement("div");
productos.className=("container1");
fetch("http://localhost:8080/Productos/todos").then(Response=>Response.text().then(texto => 
{   const txt = JSON.parse(texto);
  //  productos.innerHTML= sk;
  
    
    console.log(txt.length);
    for(let x =0; x<txt.length;x++){
        productos.innerHTML += (` <div class="caja" id="${txt[x].nombre}">${txt[x].nombre}
                <button onclick="agregar('${txt[x].nombre}')" class="btn-agregar" >agregar</button>
                <p>Stock: ${txt[x].stock} </p>
            </div>`);
    }
    console.log(txt[0].nombre);
    
document.body.appendChild(productos);
}
).catch(error => console.error('Error:',error)));
var btnVaciar = document.createElement("div");
btnVaciar.innerHTML=`</div>
        <button type="button" onclick="vaciar()">vaciar canasto</button>
        <div id="carrito">
        </div>`;
document.body.appendChild(btnVaciar);

}

