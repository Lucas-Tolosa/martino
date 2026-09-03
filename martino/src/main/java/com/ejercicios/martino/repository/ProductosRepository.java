package com.ejercicios.martino.repository;

import com.ejercicios.martino.domain.Productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface  ProductosRepository extends JpaRepository<Productos, Long> {
    Productos findByNombre(String nombre);
    boolean existsByNombre(String nombre);
    Productos findById(long id);
}
