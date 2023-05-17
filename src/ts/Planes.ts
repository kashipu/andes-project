import { Plataforma } from "./Plataforma";

export class Planes {
    nombre: string;
    precio: number;
    descripcion: string;

    constructor(nombre: string, precio: number, descripcion: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        return { nombre: this.nombre, precio: this.precio, descripcion: this.descripcion}
    }
}