import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();
trybeClube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date('2022-12-28');

const reservarQuadraFutebol = trybeClube.buscarQuadra<QuadraFutebol>(0).reservar(dataReserva);
console.log(reservarQuadraFutebol);
