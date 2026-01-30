package com.ejercicios.martino.holaMundo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ({"/holaMundo"})
@CrossOrigin (origins = "*")
public class divGeneratorController {



    @GetMapping("/alo")
    public String generadorDiv(){
        return "<div class=\"container\" >\n <div class=\"caja\" id='frutilla' >tarta frutilla <button onclick=\"agregar('tarta frutilla')\" class=\"btn-agregar\" >agregar</button></div>\n<div class=\"caja\" id='god'>god <button onclick=\"agregar('god no?')\" class=\"btn-agregar\" >agregar</button></div>\n</div>";
    }
}
