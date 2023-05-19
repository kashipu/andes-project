import { allActores } from "./Actor.js";
import { allDirectors } from "./Director.js";
import { allPlataformas } from "./Plataforma.js";
export const allSeries = [];
export const allCategorias = [];
export class Serie {
    constructor(nombre, imagen, categorias, directores, actores, episodios, plataformas) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categorias = categorias !== null && categorias !== void 0 ? categorias : [];
        this.plataformas = plataformas !== null && plataformas !== void 0 ? plataformas : [];
        this.episodios = episodios !== null && episodios !== void 0 ? episodios : [];
        this.directores = directores !== null && directores !== void 0 ? directores : [];
        this.actores = actores !== null && actores !== void 0 ? actores : [];
        this.categorias.forEach((categoria) => {
            if (!allCategorias.includes(categoria)) {
                allCategorias.push(categoria);
            }
            ;
            this.plataformas = [];
        });
        allSeries.push(this);
    }
    // Metodos estaticos
    static getAllSeries() {
        return allSeries;
    }
    static getSerieByIndex(index) {
        const dataSerie = allSeries[index];
        return `La serie "${dataSerie.nombre}" es una serie de ${dataSerie.categorias.join(", ")}`;
    }
    static getAllCategorias() {
        return allCategorias;
    }
    static createCategoria(categoria) {
        allCategorias.push(categoria);
    }
    // Metodos de instancia
    setPlataformaByIndex(plataforma) {
        let plataformaByIndex = allPlataformas[plataforma];
        this.plataformas.push(plataformaByIndex);
        console.log(`La plataforma "${plataformaByIndex.nombre}" se ha agregado exitosamente`);
    }
    setDirectorByIndex(director) {
        let directorByIndex = allDirectors[director];
        this.directores.push(directorByIndex);
        console.log(`El director "${directorByIndex.nombre}" se ha agregado exitosamente`);
    }
    setActorByIndex(actor) {
        let actorByIndex = allActores[actor];
        this.actores.push(actorByIndex);
        console.log(`El actor "${actorByIndex.nombre}" se ha agregado exitosamente`);
    }
    setCategoria(nuevaCategoria) {
        this.categorias.push(...nuevaCategoria);
    }
}
