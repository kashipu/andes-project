export const allActores = [];
export class Actor {
    constructor(nombre, imagen, descripcion, seriesActuadas) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.seriesActuadas = seriesActuadas !== null && seriesActuadas !== void 0 ? seriesActuadas : [];
        allActores.push(this);
    }
    static getAllActores() {
        return allActores;
    }
}
