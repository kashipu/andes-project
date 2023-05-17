import { Actores } from "./Actores";
import { Director } from "./Director";
import { Episodio } from "./Episodio";
import { Plataforma } from "./Plataforma";

export class Serie {
  imagen: string;
  nombre: string;
  categorias: string[];
  episodios: Episodio[];
  directores: Director[];
  actores: Actores[];
  plataformas: Plataforma;

  constructor(
    imagen: string,
    nombre: string,
    categorias: string[],
    plataformas: Plataforma,
    directores?: Director[],
    actores?: Actores[],
    episodios?: Episodio[]
  ) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.categorias = categorias;
    this.plataformas = plataformas;
    this.episodios = episodios ?? [];
    this.directores = directores ?? [];
    this.actores = actores ?? [];
  }
}
