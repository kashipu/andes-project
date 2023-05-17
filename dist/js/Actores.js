export class Actores {
    constructor(imagen, nombre, descripcion, seriesActuadas) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.seriesActuadas = seriesActuadas !== null && seriesActuadas !== void 0 ? seriesActuadas : [];
    }
}
