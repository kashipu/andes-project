import { createData } from "./Data.js";
import { Serie } from "./Serie.js";
// Crear Datos
createData();
// Metodos de los enunciados
// 1. Mostrar el listado de todas las series
console.log(Serie.getAllSeries());
// 2. Mostrar el detalle de una serie en particular
//console.log(Serie.getDetailSerieByIndex(1));
// 3. Mostrar el listado de categorías
//console.log(Serie.getAllCategorias())
// 4. Mostrar el listado de directores y actores de una serie
// 5. Mostrar el detalle de un director y de un actor
// 6. Mostrar el listado de las plataformas
// console.log(Plataforma.getAllNamePlataformas())
// 7. Mostrar detalle de una plataforma
// console.log(Plataforma.getPlataformaByIndex(1))
// 8. Crear una nueva serie
/* const serie4 = new Serie(
    "Breaking bad",
    "https://i.ebayimg.com/images/g/eKEAAOxyOMdS4U2W/s-l500.jpg",
    ["Drama", "Thiller", "Crimen"])
console.log(serie4) */
// 9. Crear una nueva categoría
// console.log(Serie.createCategoria("Ejemplo método"))
// 10. Crear un nuevo actor
// 11. Crear un nuevo director
// 12. Agregar una categoría a una serie
// console.log(serie4.setCategoria(["Drogas"]))
// console.log(serie4.categorias)
// 13. Agregar un actor a una serie
// 14. Agregar un director a una serie
