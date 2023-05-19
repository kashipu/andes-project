import { Plataforma } from "./Plataforma.js";
import { createData } from "./Data.js";
import { Serie } from "./Serie.js";
import { Director } from "./Director.js";
import { Actor } from "./Actor.js";

// Crear Datos
createData();

const serie4 = new Serie(
    "Breaking bad",
    "https://i.ebayimg.com/images/g/eKEAAOxyOMdS4U2W/s-l500.jpg",
    ["Drama", "Thiller", "Crimen"])

// Metodos de los enunciados
// 1. Mostrar el listado de todas las series
console.log(Serie.getAllSeries());
// 2. Mostrar el detalle de una serie en particular
console.log(Serie.getSerieByIndex(1));
// 3. Mostrar el listado de categorías
console.log(Serie.getAllCategorias())
// 4. Mostrar el listado de directores y actores de una serie
console.log(serie4.Actores)
// 5. Mostrar el detalle de un director y de un actor
console.log(serie4.Directores)
// 6. Mostrar el listado de las plataformas
console.log(Plataforma.getAllNamePlataformas())
// 7. Mostrar detalle de una plataforma
console.log(Plataforma.getPlataformaByIndex(1))
// 8. Crear una nueva serie
console.log(serie4)
// 9. Crear una nueva categoría
console.log(Serie.createCategoria("Ejemplo método"))
// 10. Crear un nuevo actor
const actor4 = new Actor(
    "Ejemplo Actor",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Gabriel_Macht_3241.jpg/640px-Gabriel_Macht_3241.jpg",
    "Gabriel Macht es un actor estadounidense, más conocido por interpretar a Harvey Specter en la serie Suits."
    )
// 11. Crear un nuevo director
const director4 = new Director(
    "Ejemplo Director",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Aaron_Korsh_3293.jpg/640px-Aaron_Korsh_3293.jpg",
    "Aaron Korsh es un abogado y guionista estadounidense. Es conocido por ser el creador de la serie de televisión Suits."
  );
// 12. Agregar una categoría a una serie
console.log(serie4.setCategoria(["Drogas"]))
console.log(serie4.categorias)
// 13. Agregar un actor a una serie
serie4.setActorByIndex(1)
// 14. Agregar un director a una serie
serie4.setDirectorByIndex(1)
