import { Plataforma } from "./Plataforma.js";
import { createData } from "./Data.js";
import { Serie } from "./Serie.js";
import { Director } from "./Director.js";
import { Actor } from "./Actor.js";

// Crear Datos
createData();

// Mostrar metodos
console.log(Plataforma.getAllPlataformas())
console.log(Serie.getAllSeries())
console.log(Director.getAllDirectors());
console.log(Actor.getAllActores());

