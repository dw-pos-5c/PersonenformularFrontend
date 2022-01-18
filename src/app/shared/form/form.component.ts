import { Component, OnInit } from '@angular/core';
import {BackendConnectorService} from "../../core/backend-connector.service";
import Person from "../../models/Person";
import RegexContainer from "../../models/RegexContainer";
import {DataProviderService} from "../../core/data-provider.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  firstname: string;
  lastname: string;
  born: string;
  tel: string;
  address: string;

  regexContainer!: RegexContainer;

  constructor(private backend: BackendConnectorService, private dataProvider: DataProviderService) {
    this.firstname = '';
    this.lastname = '';
    this.born = '';
    this.tel = '';
    this.address = '';

    backend.getRegex().subscribe(x => {
      this.regexContainer = new RegexContainer(
        x.firstname,
        x.lastname,
        x.date,
        x.address,
        x.tel,
      );
    });
  }

  ngOnInit(): void {
  }

  resetData() {
    this.firstname = '';
    this.lastname = '';
    this.born = '';
    this.tel = '';
    this.address = '';
  }

  firstnameValid = true;
  lastnameValid = true;
  bornValid = true;
  telValid = true;
  addressValid = true;

  checkForm(): void {
    this.firstnameValid = this.regexContainer.firstname.test(this.firstname);
    this.lastnameValid = this.regexContainer.lastname.test(this.lastname);
    this.bornValid = this.regexContainer.date.test(this.born);
    this.telValid = this.regexContainer.tel.test(this.tel);
    this.addressValid = this.regexContainer.address.test(this.address);

    console.log(this.firstnameValid, this.addressValid);

    if (this.firstnameValid && this.lastnameValid && this.bornValid && this.telValid && this.addressValid) {
      this.savePersons();
    }
  }

  savePersons():void {
    this.backend.postPersons(new Person(-1, this.firstname, this.lastname, this.born, this.tel, this.address)).subscribe(x => {
      alert(x);
      this.resetData();
      this.dataProvider.notify();
    });
  }

}
