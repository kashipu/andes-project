import { Serie } from "./Serie";

export class Director {
  imagen: string;
  nombre: string;
  descripcion: string;
  seriesDirigidas: Serie[];

  constructor(imagen: string, nombre: string, descripcion: string, seriesDirigidas?: Serie[]) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.seriesDirigidas = seriesDirigidas ?? [];
  }
}
