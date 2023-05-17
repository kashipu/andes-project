// Crear plataforma
import { Plataforma } from "./Plataforma.js";

export const createData = () => {
    // Creo las plataformas
const plataforma1 = new Plataforma("Netflix", "https://www.netflix.com/");
const plataforma2 = new Plataforma("Amazon Prime Video", "https://www.primevideo.com/");
const plataforma3 = new Plataforma("Disney+", "https://www.disneyplus.com/");

// Creo los planes
// -- Netflix
plataforma1.createPlan("Básico", 139, "1 pantalla");
plataforma1.createPlan("Estándar", 269, "2 pantallas");
plataforma1.createPlan("Premium", 369, "4 pantallas");

// -- Amazon Prime Video
plataforma2.createPlan("Prime Video", 219, "2 pantallas");
plataforma2.createPlan("Prime Video + Prime", 399, "2 pantallas");
plataforma2.createPlan("Prime Video + Prime + Music", 499, "2 pantallas");

// -- Disney+
plataforma3.createPlan("Disney+", 385, "4 pantallas");
plataforma3.createPlan("Disney+ StarPlus", 749, "4 pantallas");
plataforma3.createPlan("Disney+ StarPlus + Hulu", 899, "4 pantallas");
}
