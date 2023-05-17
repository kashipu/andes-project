export const allSeries = [];
export class Serie {
    constructor(nombre, imagen, categorias, plataformas, directores, actores, episodios) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categorias = categorias;
        this.plataformas = plataformas !== null && plataformas !== void 0 ? plataformas : [];
        this.episodios = episodios !== null && episodios !== void 0 ? episodios : [];
        this.directores = directores !== null && directores !== void 0 ? directores : [];
        this.actores = actores !== null && actores !== void 0 ? actores : [];
        allSeries.push(this);
    }
    static getAllSeries() {
        return allSeries;
    }
    setPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
}
