import { Component, OnInit } from '@angular/core';
import Person from "../../models/Person";
import {BackendConnectorService} from "../../core/backend-connector.service";
import {DataProviderService} from "../../core/data-provider.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  persons: Person[] = [];

  constructor(private backend: BackendConnectorService, dataProvider: DataProviderService) {
    this.getPersons();

    dataProvider.listen(() => this.getPersons());
  }

  getPersons(): void {
    this.backend.getPersons().subscribe(result => {
      console.log(result);
      this.persons = result;
    });
  }

  ngOnInit(): void {
  }

}
