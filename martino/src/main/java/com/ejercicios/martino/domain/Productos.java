package com.ejercicios.martino.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Productos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nombre;
    private String descripcion;
    private int precio;
    private int stock;

    public Productos(){}

    public Productos(String nombre, String descripcion, int precio,int stock){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.stock=stock;
    }
    public String getNombre(){
        return this.nombre;
    }
    public String getDescripcion(){
        return  this.descripcion;
    }
    public int getId(){
        return  this.id;
    }
    public int getPrecio(){
        return  this.precio;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    @Override
    public String toString(){
        return "id: "+this.getId()+", nombre:"+this.getNombre()+", stock: "+this.getStock()+", descripcion:"+this.getDescripcion()+", precio:"+this.getPrecio();
    }
}
