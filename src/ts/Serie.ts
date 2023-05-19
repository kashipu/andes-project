import { Actor, allActores } from "./Actor.js";
import { Director, allDirectors } from "./Director.js";
import { Episodio } from "./Episodio.js";
import { Plataforma, allPlataformas } from "./Plataforma.js";

export const allSeries:Serie[] = [];
export const allCategorias:string[] = [];
export class Serie {
  nombre: string;
  imagen: string;
  categorias: string[];
  episodios: Episodio[];
  directores: Director[];
  actores: Actor[];
  plataformas: Plataforma[];

  constructor(
    nombre: string,
    imagen: string,
    categorias?: string[],
    directores?: Director[],
    actores?: Actor[],
    episodios?: Episodio[],
    plataformas?: Plataforma[]
  ) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.categorias = categorias ?? [];
    this.plataformas = plataformas ?? [];
    this.episodios = episodios ?? [];
    this.directores = directores ?? [];
    this.actores = actores ?? [];
    this.categorias.forEach((categoria) => {
      if(!allCategorias.includes(categoria)) {
        allCategorias.push(categoria)
      };
    this.plataformas = [];
  });
  allSeries.push(this);
  }
 // Metodos estaticos
  static getAllSeries() {
    return allSeries;
  }
  static getSerieByIndex(index: number) {
    const dataSerie = allSeries[index];
    return `La serie "${dataSerie.nombre}" es una serie de ${dataSerie.categorias.join(", ")}`
  }
  static getAllCategorias() {
    return allCategorias;
  }
  static createCategoria(categoria: string) {
    allCategorias.push(categoria)
  }

  // Metodos de instancia
  setPlataformaByIndex(plataforma: number) {
    let plataformaByIndex = allPlataformas[plataforma]
    this.plataformas.push(plataformaByIndex)
    console.log(`La plataforma "${plataformaByIndex.nombre}" se ha agregado exitosamente`)
  }

  setDirectorByIndex(director: number) {
    let directorByIndex = allDirectors[director]
    this.directores.push(directorByIndex)
    console.log(`El director "${directorByIndex.nombre}" se ha agregado exitosamente`)
  }

  setActorByIndex(actor: number) {
    let actorByIndex = allActores[actor]
    this.actores.push(actorByIndex)
    console.log(`El actor "${actorByIndex.nombre}" se ha agregado exitosamente`)
  }

  setCategoria(nuevaCategoria: string[]) {
    this.categorias.push(...nuevaCategoria)
  }
  get Actores() {
    console.log(`Los actores son`)
    return this.actores
  }
  get Directores() {
    console.log(`Los directores son`)
    return this.directores
  }
}
