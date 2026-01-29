
var newdiv = document.createElement("div");
fetch("http://localhost:8080/holaMundo/alo").then(Response=>Response.text().then(texto => 
{newdiv.innerHTML= texto;
document.body.appendChild(newdiv);}
).catch(error => console.error('Error:',error)));

