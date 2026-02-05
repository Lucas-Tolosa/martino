package com.ejercicios.martino.carrito;

public class Productos {
    private String nombre;
    private String descripcion;
    private static int id=0;
    private int itemId;
    private int precio;
    private int stock;

    public Productos(String nombre, String descripcion, int precio,int stock){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.stock=stock;
    this.itemId =Productos.id++;
    }
    public String getNombre(){
        return this.nombre;
    }
    public String getDescripcion(){
        return  this.descripcion;
    }
    public int getId(){
        return  this.itemId;
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
}
