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
    static getAllNamePlataformas() {
        let plataformasNombre:string[] = []
        allPlataformas.forEach(plataforma => {
            plataformasNombre.push(plataforma.nombre)
        })
        return plataformasNombre
    }
    static getPlataformaByIndex(index:number) {
       const pl = allPlataformas[index]
       return `${pl.nombre} tiene ${pl.planes.length} planes`
    }
    createPlan(nombre: string, precio: number, descripcion: string) {
        this.planes.push(new Plan(nombre, precio, descripcion));
    }
}

