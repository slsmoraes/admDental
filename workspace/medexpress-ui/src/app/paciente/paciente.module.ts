import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientepesquisaComponent } from './pacientepesquisa/pacientepesquisa.component';
import { PacientecadastroComponent } from './pacientecadastro/pacientecadastro.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    PacientepesquisaComponent,
    PacientecadastroComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    CheckboxModule,
    ListboxModule,
    CalendarModule,
  ],
  exports: [

  ]
})
export class PacienteModule { }
