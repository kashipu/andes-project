import { Plan } from './Plan.js';
import { Serie } from './Serie.js';

export const allPlataformas: Plataforma[] = [];
export class Plataforma {
    nombre: string;
    sitioWeb: string;
    planes: Plan[];
    series: Serie[];

    constructor(nombre: string, sitioWeb: string, planes?: Plan[], series?: Serie[]) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = planes ?? [];
        this.series = series ?? [];
        allPlataformas.push(this);
    }
    static getAllPlataformas() {
        return allPlataformas;
    }
    createPlan(nombre: string, precio: number, descripcion: string) {
        this.planes.push(new Plan(nombre, precio, descripcion));
    }
}

