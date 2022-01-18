export default class RegexContainer {
  firstname: RegExp;
  lastname: RegExp;
  date: RegExp;
  address: RegExp;
  tel: RegExp;

  constructor(firstname: RegExp, lastname: RegExp, date: RegExp, address: RegExp, tel: RegExp) {
    this.firstname = new RegExp(firstname);
    this.lastname = new RegExp(lastname);
    this.date = new RegExp(date);
    this.address = new RegExp(address);
    this.tel = new RegExp(tel);
  }
}
