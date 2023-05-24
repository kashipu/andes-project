export class Episodio {
    constructor(nombre, resumen, duracion, serie) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
        this.serie = serie;
    }
    createEpisodio(nombre, resumen, duracion, serie) {
        return new Episodio(nombre, resumen, duracion, serie);
    }
}
