import { Plan } from './Plan.js';
export const allPlataformas = [];
export class Plataforma {
    constructor(nombre, sitioWeb, planes, series) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = planes !== null && planes !== void 0 ? planes : [];
        this.series = series !== null && series !== void 0 ? series : [];
        allPlataformas.push(this);
    }
    static getAllPlataformas() {
        return allPlataformas;
    }
    createPlan(nombre, precio, descripcion) {
        this.planes.push(new Plan(nombre, precio, descripcion));
    }
}
