// eslint-disable-next-line import/no-unresolved, import/extensions
import INotificator from './INotificator';

class EmailNotification implements INotificator {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  sendNotification(message: string): void {
      console.log(`Awesome implementation: ${this.email} - ${message}`);
  }
}

export default EmailNotification;