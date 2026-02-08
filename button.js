let productosEmpresa =new Map();
let compras= new Map();

let carrito={total:0,items:[]};

function cargarCarrito(txt){
    
    productosEmpresa.set((txt.id),{
         nombre : (txt.nombre), 
         stock : (txt.stock), 
         precio : (txt.precio), 
         descripcion : (txt.descripcion),
          id : (txt.id)});  
        
    
}
function copiar(){
    for ([llave, valor] of productosEmpresa){
        compras.set(llave,{
            nombre : valor.nombre,
            stock : valor.stock,
            precio : valor.precio,
            descripcion : valor.descripcion,
            id : valor.id
        });     
    }
    
}

function agregar (id){
    const stock = compras.get(id).stock;
    if(stock<=0){
        alert("no hay stock");
        return;
    }else{
       compras.get(id).stock-=1;
       carrito.total+= compras.get(id).precio;
       console.log(compras.get(id).nombre)
        if(carrito.items.find((comparador)=> comparador.nombre == compras.get(id).nombre)){
            const indice = carrito.items.findIndex((e)=> e.id == compras.get(id).id)
            carrito.items[indice].cantidad++;
            console.log(carrito.items[indice].cantidad)
        }else{
            carrito.items.push({nombre: compras.get(id).nombre, cantidad:1, precio: compras.get(id).precio, id: id});
            
        }
    }
    mostrar()
} 
function mostrar(){
    var ca =  document.querySelector("#carrito1");
    if(compras.size==0){
        ca.innerHTML="<h1>el canasto esta vacio<h1>";
        return;
    }
        
    ca.innerHTML="";
    for(let sa of carrito["items"]){
        ca.innerHTML+="<p>items: "+sa.nombre +" cantidad: "+sa.cantidad +" precio: "+sa.precio+"</p>";
    }
    ca.innerHTML+="<p>total: "+carrito.total+"</p>";   
}
function vaciar(){
    copiar();
    carrito={total:0,items:[]};
    mostrar()
}
function pagar(){
    

    for(let [llave,valor] of compras){
        productosEmpresa.set(llave,{
            nombre : valor.nombre,
            stock : valor.stock,
            precio : valor.precio,
            descripcion : valor.descripcion,
            id : valor.id});
    }
    console.log(productosEmpresa);
    vaciar()
}
