import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        TableComponent,
        FormComponent
    ],
  exports: [
    TableComponent,
    FormComponent
  ],
    imports: [
        CommonModule,
      FormsModule
    ]
})
export class SharedModule { }
