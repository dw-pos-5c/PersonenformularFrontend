export default class Person {
  id: number;
  firstname: string;
  lastname: string;
  born: string;
  tel: string;
  address: string;

  constructor(id: number, firstname: string, lastname: string, born: string, tel: string, address: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.born = born;
    this.tel = tel;
    this.address = address;
  }
}
