let carrito = [];

function agregar (nombre){
    carrito.push(nombre);
    console.log(carrito);
} 
function mostrar(){
    document.body.innerHTML+="<p>"+ carrito.toString() +"</p>";
    
}

