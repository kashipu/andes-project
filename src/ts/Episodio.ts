import { Serie } from "./Serie";

export class Episodio {
  nombre: string;
  resumen: string;
  duracion: number;
  serie: Serie;

  constructor(nombre: string, resumen: string, duracion: number) {
    this.nombre = nombre;
    this.resumen = resumen;
    this.duracion = duracion;
  }
}
