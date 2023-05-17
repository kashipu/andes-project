import { Serie } from "./Serie";
import { allSeries } from "./Serie";

export const allDirectors: Director[] = [];
export class Director {
  imagen: string;
  nombre: string;
  descripcion: string;
  seriesDirigidas: Serie[];

  constructor(nombre: string, imagen: string, descripcion: string, seriesDirigidas?: Serie[]) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.seriesDirigidas = seriesDirigidas ?? [];
    allDirectors.push(this);
  }
  static getAllDirectors() {
    return allDirectors;
  }
}