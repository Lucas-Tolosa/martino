package com.ejercicios.martino.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class itemCarrito {
    @Id
    private int id;
    private int cantidad;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
}
