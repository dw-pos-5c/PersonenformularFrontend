import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';



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
        CommonModule
    ]
})
export class SharedModule { }
