/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-unresolved, import/extensions
import INotificator from './INotificator';

class ConsoleNotification implements INotificator {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  sendNotification(message: string): void {
      console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}

export default ConsoleNotification;