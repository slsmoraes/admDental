import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {ListboxModule} from 'primeng/listbox';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    ListboxModule,
  ],
  providers: [],
  bootstrap: [FormComponent],

  exports: [
    FormComponent,
  ]
})
export class FormularioModule { }
