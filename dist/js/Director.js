export class Director {
    constructor(imagen, nombre, descripcion, seriesDirigidas) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.seriesDirigidas = seriesDirigidas !== null && seriesDirigidas !== void 0 ? seriesDirigidas : [];
    }
}
