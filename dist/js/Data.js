// Crear plataforma
import { createPlataformas } from "./InitData/PlataformasData.js";
import { createSeries } from "./InitData/SeriesData.js";
import { createDirectores } from "./InitData/DirectorData.js";
import { createActores } from "./InitData/ActorData.js";
export const createData = () => {
    createPlataformas();
    createDirectores();
    createActores();
    createSeries();
};
