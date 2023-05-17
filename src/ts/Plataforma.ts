import { Planes } from './Planes.js';
import { Serie } from './Serie.js';

export const Plataformas: Plataforma[] = [];
export class Plataforma {
    nombre: string;
    sitioWeb: string;
    planes: Planes[];
    series: Serie[];

    constructor(nombre: string, sitioWeb: string, planes?: Planes[], series?: Serie[]) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = planes ?? [];
        this.series = series ?? [];
        Plataformas.push(this);
    }
    static getAllPlataformas() {
        return Plataformas;
    }
    createPlan(nombre: string, precio: number, descripcion: string) {
        this.planes.push(new Planes(nombre, precio, descripcion));
    }
}

