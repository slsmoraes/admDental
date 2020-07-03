import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {ListboxModule} from 'primeng/listbox';

import {CurrencyMaskModule } from 'ng2-currency-mask';

import { OrcamentopesquisaComponent } from './orcamentopesquisa/orcamentopesquisa.component';
import { OrcamentocadastroComponent } from './orcamentocadastro/orcamentocadastro.component';

@NgModule({
  declarations: [
    OrcamentopesquisaComponent,
    OrcamentocadastroComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CheckboxModule,
    ListboxModule,
    CurrencyMaskModule,
  ],
  exports: [

  ]
})
export class OrcamentoModule { }
