let productosEmpresa =new Map();
let compras= new Map();

let carrito={total:0,items:[]};

function cargarCarrito(txt){
    
    productosEmpresa.set((txt.id),{ nombre : (txt.nombre), stock : (txt.stock), precio : (txt.precio), descripcion : (txt.descripcion)});  
    
}
function copiar(){
    for ([llave, valor] of productosEmpresa){
        compras.set(llave,{nombre : valor.nombre, stock : valor.stock, precio : valor.precio, descripcion : valor.descripcion});     
    }
    
}

function agregar (id){
    console.log("compras: "+compras.get(id));
    const stock = compras.get(id).stock;
    console.log("se estan eligiendo"+stock);
    console.log("empresa tiene:"+productosEmpresa.get(id).stock);
    if(stock<=0){
        alert("no hay stock");
        return;
    }else{
       compras.get(id).stock-=1;
       carrito.total+= compras.get(id).precio;
       if(carrito.items.length == 0){
              carrito.items.push({nombre: compras.get(id).nombre, cantidad:1, precio: compras.get(id).precio});
              console.log(carrito.items);
              return;
    }else {
        if(carrito.items.find(carrito.items[id].nombre)){
            carrito.items[id].cantidad++;
        }else{
            carrito.items.push({nombre: compras.get(id).nombre, cantidad:1, precio: compras.get(id).precio});
        }
    }
}
    

    mostrar()
    console.log(carrito);
} 
function mostrar(){
    var ca =  document.querySelector("#carrito1");
    if(compras.size==0){
        console.log("que onda");
        ca.innerHTML="<h1>el canasto esta vacio<h1>";
        return;
    }
    
    ca.innerHTML="";
    for(let sa of carrito["items"]){
        console.log("sa: "+sa);
        ca.innerHTML+="<p>"+carrito.total+"</p>"+"<p>items: "+sa.nombre +" cantidad: "+sa.cantidad +" precio: "+sa.precio+"</p>";
    }
    
}
function vaciar(){
    copiar();
    carrito={total:0,items:[]};
    mostrar()
}
function pagar(){
    productosEmpresa.get(id).stock= compras.get(id).stock;
    var ca =  document.querySelector("#carrito1");

}
