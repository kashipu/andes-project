// Crear plataforma
import { createPlataformas } from "./InitData/PlataformasData.js";
import { createSeries } from "./InitData/SeriesData.js";
import { createDirectores } from "./InitData/DirectorData.js";
export const createData = () => {
    createPlataformas();
    createSeries();
    createDirectores();
};
