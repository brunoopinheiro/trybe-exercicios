import { IFuturisticCar } from "./interfaces";

export default class FuturisticCar implements IFuturisticCar {
  drive(): void { console.log('Driving a futuristic car.'); }

  fly(): void { console.log('Flying a futuristic car.'); }
}