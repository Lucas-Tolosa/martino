package com.ejercicios.martino.Service;

import com.ejercicios.martino.domain.Productos;
import com.ejercicios.martino.repository.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin("*")
@RequestMapping("/we")
@Service
public class ProductosService {
    @Autowired
    private ProductosRepository repositorio;
    public ProductosService(){
    }
    public Productos encontrarPorNombre(String nombre){
        if(repositorio.existsByNombre(nombre)){
            return repositorio.findByNombre(nombre);
        }
        return null;

    }
public void eliminarCarrito(){}
}
