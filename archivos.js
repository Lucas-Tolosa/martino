var productos = document.createElement("div");
function productos(){

fetch("http://localhost:8080/Productos/todos").then(Response=>Response.text().then(texto => 
{   var txt = JSON.parse(texto);
  //  productos.innerHTML= sk;
  
    console.log(txt);
    
//document.body.appendChild(productos);
}

).catch(error => console.error('Error:',error)));
}
