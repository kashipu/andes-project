import { Planes } from './Planes';
import { Serie } from './Serie';

export class Plataforma {
    nombre: string;
    sitioWeb: string;
    planes: Planes[];
    series: Serie[];

    constructor(nombre: string, sitioWeb: string, planes: Planes[], series: Serie[]) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planes = planes;
        this.series = series;
    }
}