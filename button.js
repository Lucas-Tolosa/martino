let compras = [];

let carrito=[];

async function cargarCarrito(){
    const respuesta = await fetch("http://localhost:8080/Productos/todos");
    compras = await respuesta.json();
}

function agregar (id){ 
    const produ = compras.find(hay=>hay.id==id);
    if(!produ){
        alert("el objeto escrito no existe");
        return;
    }  
    if(produ.stock<=0){
        alert("no hay stock disponible");
        return;
    }
    const carro = carrito.find(car=>car.id ==id);

    if(carro){
        if(produ.stock>carro.cantidad){
             carro.cantidad++;
             
        }else{
            alert("compra sobrepasa el stock existente");
        }
       
    }else{
        carrito.push({nombre:produ.nombre, id:produ.id,precio:produ.precio,cantidad:1})
    }
    mostrar()
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
    carrito=[];
    cargarCarrito(); 
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

async function pagar(){

await fetch("http://localhost:8080/Productos/actualizar",{
    method:"POST",
    body:JSON.stringify(carrito),
    headers:{
        'Content-type':'application/json'
}});

await cargarCarrito();
carrito=[];
mostrar();
actualizarPantalla(); 
}