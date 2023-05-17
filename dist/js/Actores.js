export class Actores {
    constructor(nombre, imagen, descripcion, seriesActuadas) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.seriesActuadas = seriesActuadas !== null && seriesActuadas !== void 0 ? seriesActuadas : [];
    }
}
