import { IAgenda } from "./interfaces/IAgenda";

export default abstract class Quadra {
  protected abstract reservar<T>(horaReserva: Date): IAgenda<T>;
}
