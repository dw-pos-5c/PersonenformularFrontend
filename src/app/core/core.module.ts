import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {DataProviderService} from "./data-provider.service";
import {BackendConnectorService} from "./backend-connector.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    DataProviderService,
    BackendConnectorService,
  ]
})
export class CoreModule { }
