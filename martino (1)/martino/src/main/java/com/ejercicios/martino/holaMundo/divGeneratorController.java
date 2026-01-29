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
        return "<div class=\"container\" >\n <div class=\"caja\" id='frutilla' >tarta frutilla <button class=\"btn-agregar\" data-id=\"3\">agregar</button></div>\n<div class=\"caja\" id='god'>chocobomba <button class=\"btn-agregar\" data-id=\"4\">agregar</button></div>\n</div>";
    }
}
