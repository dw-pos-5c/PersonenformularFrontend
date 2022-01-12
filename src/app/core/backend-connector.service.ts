import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Person from "../models/Person";
import {Observable} from "rxjs";

@Injectable()
export class BackendConnectorService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/api';

  public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/persons`);
  }
}
