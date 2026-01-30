let carrito = [];

function agregar (nombre){
    carrito.push(nombre);
    console.log(carrito);
} 
function mostrar(){
    var ca =  document.querySelector("#carrito");
    if(carrito.length==0){
        console.log("que onda");
        ca.innerHTML="<h1>el canasto esta vacio<h1>";
        return;
    }
    
    ca.innerHTML="";

    ca.innerHTML="<h1>"+carrito+"</h1>";
    
}
function vaciar(){
    carrito=[];
}

