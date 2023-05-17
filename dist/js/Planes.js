export class Planes {
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        return { nombre: this.nombre, precio: this.precio, descripcion: this.descripcion };
    }
}
