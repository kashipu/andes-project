import { Serie } from "./Serie";

export class Actores {
    imagen: string;
    nombre: string;
    descripcion: string;
    seriesActuadas: Serie[];

    constructor(imagen: string, nombre: string, descripcion: string, seriesActuadas?: Serie[]) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.seriesActuadas = seriesActuadas ?? [];
    }
}