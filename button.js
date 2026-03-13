let compras = [];

let carrito=[];
//Cargamos los dos estados, uno que va a ser cambiado solo cuando se
async function cargarCarrito(){
    const respuesta = await fetch("http://localhost:8080/Productos/todos");
    compras = await respuesta.json();
    console.log(compras)
}

function agregar (id){ 
   for( let x =0; x<compras.length;x++){
        if(compras[x].id==id){
            console.log(compras[x]);
            if(compras[x].stock>0){
                compras[x].stock--;
                if(carrito.length==0){
                    carrito.push(
                        {nombre:compras[x].nombre,
                        id:compras[x].id,
                        precio:compras[x].precio,
                        cantidad:1});
                }else{
                    console.log(carrito);
                    for(let a of carrito){
                        if(a.id == id){
                            a.cantidad++;
                            mostrar();
                            return;
                        }
                        }
                        carrito.push({nombre:compras[x].nombre,
                        id:compras[x].id,
                        precio:compras[x].precio,
                        cantidad:1}); 
                    }
                }else{
                alert("no hay stock disponible");
                }
            }
           
        }mostrar();
        
    }

function mostrar(){
    var ca =  document.querySelector("#carrito1");
    var total = 0;
    for (let x=0; x<carrito.length;x++){
        total+=(parseInt(carrito[x].cantidad) * parseInt(carrito[x].precio));
    }
    if(total==0){
        ca.innerHTML="<h1>el canasto esta vacio<h1>";
        return; 
    }
    ca.innerHTML="";
    for(let sa of carrito){
        ca.innerHTML+="<p>items: "+sa.nombre +" cantidad: "+sa.cantidad +" precio: "+sa.precio+"</p>";
    }
    ca.innerHTML+="<p>total: "+total+"</p>";   
}
function vaciar(){
    cargarCarrito();
    carrito=[];
    mostrar();
}

function actualizarPantalla(){
    const productos = document.querySelector("#container1");
    productos.innerHTML = "";
    for(let a of compras){
        productos.innerHTML+= (` <div class="caja" id="${a.nombre}">${a.nombre}
                <button onclick="agregar(${a.id})" class="btn-agregar" >agregar</button>
                <p class="stock">Stock: ${a.stock} </p>
            </div>`);
    }
    

}

function pagar(){

fetch("http://localhost:8080/Productos/actualizar",{
    method:"POST",
    body:JSON.stringify(compras),
    headers:{
        'Content-type':'application/json'
}}).then(respuesta=> {
    actualizarPantalla();
    vaciar();
    return respuesta.text();
}
).then(produ =>{
    console.log(produ);
}).catch(Error => console.error("Error: " + Error));

}