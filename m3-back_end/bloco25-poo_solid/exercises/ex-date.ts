// this is a code snippet
class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor (day: number, month: number, year: number) {
      this._day = day < 31 ? day : 1;
      this._month = month <= 12 && month >= 1 ? month : 1;
      this._year = year || 1900;
  }

  getMonthName() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const index = this._month - 1;
      return months[index];
  }

  format(formatting: string): string {
      const conditions: boolean[] = [
          (!formatting.match(/a{2,4}/g)), // verifica se possui ano
          (!formatting.match(/m{2}/g)), // verifica se possui mes
          (!formatting.match(/d{2}/g)), // verifica se possui dia
      ];

      if (conditions.every((cond) => cond)) {
          throw new Error(`O formato passado é inválido: ${formatting}`);
      }

      const day = this._day > 9 ? this._day.toString() : `0${this._day.toString()}`;
      const month = this._month > 9
          ? this._month.toString()
          : `0${this._month.toString()}`;
      const year = this._year.toString();

      const dateFormatting = formatting
          .replace('dd', day).replace('mm', month)
          .replace('M', this.getMonthName()).replace('aaaa', year)
          .replace('aa', year.substr(-2));

      return dateFormatting;
  }
}