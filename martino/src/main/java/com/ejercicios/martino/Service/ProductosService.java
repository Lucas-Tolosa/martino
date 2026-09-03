package com.ejercicios.martino.Service;

import com.ejercicios.martino.domain.Productos;
import com.ejercicios.martino.repository.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        throw new RuntimeException("No existe el producto con el nombre: "+nombre);

    }
public void eliminarCarrito(){}
}
