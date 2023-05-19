export const allDirectors = [];
export class Director {
    constructor(nombre, imagen, descripcion, seriesDirigidas) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.seriesDirigidas = seriesDirigidas !== null && seriesDirigidas !== void 0 ? seriesDirigidas : [];
        allDirectors.push(this);
    }
    static getAllDirectors() {
        return allDirectors;
    }
}
