import { Serie } from "./Serie";
export class Episodio {
  nombre: string;
  resumen: string;
  duracion: number;
  serie: Serie;

  constructor(nombre: string, resumen: string, duracion: number, serie: Serie) {
    this.nombre = nombre;
    this.resumen = resumen;
    this.duracion = duracion;
    this.serie = serie;
  }
  createEpisodio(nombre: string, resumen: string, duracion: number, serie: Serie) {
    return new Episodio(nombre, resumen, duracion, serie);
  }
}

