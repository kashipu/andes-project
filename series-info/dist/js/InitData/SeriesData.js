import { Serie } from "../Serie.js";
export const createSeries = () => {
    const serie1 = new Serie("Stranger Things", "https://m.media-amazon.com/images/I/91FTgJZL-kL._AC_SL1500_.jpg", ["Ciencia ficción", "Terror", "Drama"]);
    serie1.setPlataformaByIndex(0);
    serie1.setActorByIndex(0);
    serie1.setDirectorByIndex(0);
    const serie2 = new Serie("Dark", "https://flxt.tmsimg.com/assets/p14652182_b_v8_aa.jpg", ["Ciencia ficción", "Drama", "Suspenso"]);
    const serie3 = new Serie("Suits", "https://es.web.img3.acsta.net/pictures/19/07/18/17/08/5991371.jpg", ["Drama", "Comedia", "Legal drama"]);
};
