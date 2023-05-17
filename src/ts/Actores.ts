import { Serie } from "./Serie";

export class Actores {
    nombre: string;
    imagen: string;
    descripcion: string;
    seriesActuadas: Serie[];

    constructor(nombre: string, imagen: string, descripcion: string, seriesActuadas?: Serie[]) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.seriesActuadas = seriesActuadas ?? [];
    }
}