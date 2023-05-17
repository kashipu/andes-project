import { Planes } from './Planes.js';
export const Plataformas = [];
export class Plataforma {
    constructor(nombre, sitioWeb, planes, series) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = planes !== null && planes !== void 0 ? planes : [];
        this.series = series !== null && series !== void 0 ? series : [];
        Plataformas.push(this);
    }
    static getAllPlataformas() {
        return Plataformas;
    }
    createPlan(nombre, precio, descripcion) {
        this.planes.push(new Planes(nombre, precio, descripcion));
    }
}
