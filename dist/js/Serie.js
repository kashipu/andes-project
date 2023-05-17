export class Serie {
    constructor(imagen, nombre, categorias, plataformas, directores, actores, episodios) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categorias = categorias;
        this.plataformas = plataformas;
        this.episodios = episodios !== null && episodios !== void 0 ? episodios : [];
        this.directores = directores !== null && directores !== void 0 ? directores : [];
        this.actores = actores !== null && actores !== void 0 ? actores : [];
    }
}
