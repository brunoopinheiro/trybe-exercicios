/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import ConsoleNotification from './ConsoleNotification';
import INotificator from './INotificator';

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: INotificator;
  
  constructor(readingGoal: number, notificator: INotificator = new ConsoleNotification('console')) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.notificator = notificator;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification(
      'There are still some books to go!',
    );
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);