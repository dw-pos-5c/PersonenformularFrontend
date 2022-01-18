import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class DataProviderService {

  subject = new Subject();

  listen(callback: Function): void {
    this.subject.asObservable().subscribe(() => callback());
  }

  notify(): void {
    this.subject.next('');
  }
}
