package com.ejercicios.martino.holaMundo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class readinController {

    @GetMapping("/saludo/{nombre}")
    public String saludo(@PathVariable String nombre){
        return ("hola " + nombre );
    }
}
