package com.ejercicios.martino.carrito;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/Productos")
@CrossOrigin("*")
public class productosController {
    private Productos [] p1 = new Productos[5];
//definimos cada producto harcodeado, en un futuro lo juntamos con la base de datos
    public productosController(){
        p1[0] = new Productos("balcarce","Torta de pionono relleno de ddl",30000,2);
        p1[1] = new Productos("ricota","Torta de ricota con masa",22000,4);
        p1[2] = new Productos("pan","Pan frances, pueden ser flautas o miñones",4000,40);
        p1[3] = new Productos("huevo","Es un huevo no molestes",300,30);
        p1[4] = new Productos("polenta","buenasa con quesito y salsa bolognesa",1800,1);
    }
    @GetMapping("/todos")
    public Productos[] getProductos(){
        return p1;
    }


}
