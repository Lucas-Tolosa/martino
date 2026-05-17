package com.ejercicios.martino.carrito;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/Productos")
public class productosController {
    private Productos [] p1 = new Productos[6];
//definimos cada producto harcodeado, en un futuro lo juntamos con la base de datos
    public productosController(){
        p1[0] = new Productos("Balcarce","Torta de pionono relleno de ddl",30000,2);
        p1[1] = new Productos("Ricota","Torta de ricota con masa",22000,4);
        p1[2] = new Productos("Pan","Pan frances, pueden ser flautas o miñones",4000,40);
        p1[3] = new Productos("Huevo","Es un huevo no molestes",300,30);
        p1[4] = new Productos("Polenta","buenasa con quesito y salsa bolognesa",1800,1);
    }
    @GetMapping("/{nombre}")
    public Productos getProductos(@PathVariable String nombre){
        for(Productos p: p1){
            if(p.getNombre().equalsIgnoreCase(nombre)){
                return p;
            }
        }
        return null;
    }

}
