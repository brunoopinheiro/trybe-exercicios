// eslint-disable-next-line import/no-unresolved, import/extensions
import INotificator from './INotificator';

class PhoneNotification implements INotificator {
  private phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }

  sendNotification(message: string): void {
      console.log(`Awesome implementation: ${this.phone} - ${message}`);
  }
}

export default PhoneNotification;