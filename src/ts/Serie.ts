import { Actor } from "./Actor.js";
import { Director } from "./Director.js";
import { Episodio } from "./Episodio.js";
import { Plataforma, allPlataformas } from "./Plataforma.js";

export const allSeries:Serie[] = [];
export class Serie {
  imagen: string;
  nombre: string;
  categorias: string[];
  episodios: Episodio[];
  directores: Director[];
  actores: Actor[];
  plataformas: Plataforma[];

  constructor(
    nombre: string,
    imagen: string,
    categorias: string[],
    plataformas?: Plataforma[],
    directores?: Director[],
    actores?: Actor[],
    episodios?: Episodio[]
  ) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.categorias = categorias;
    this.plataformas = plataformas ?? [];
    this.episodios = episodios ?? [];
    this.directores = directores ?? [];
    this.actores = actores ?? [];
    allSeries.push(this);
  }
  static getAllSeries() {
    return allSeries;
  }
  setPlataforma(plataforma: Plataforma) {
    this.plataformas.push(plataforma);
  }
}
