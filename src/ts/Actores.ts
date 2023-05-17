import { Serie } from "./Serie";

export const allActores:Actor[] = [];
export class Actor {
    nombre: string;
    imagen: string;
    descripcion: string;
    seriesActuadas: Serie[];

    constructor(nombre: string, imagen: string, descripcion: string, seriesActuadas?: Serie[]) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.seriesActuadas = seriesActuadas ?? [];
        allActores.push(this);
    }

    static getAllActores() {
        return allActores;
    }
}