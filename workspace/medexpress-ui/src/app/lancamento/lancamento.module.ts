import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentopesquisaComponent } from './lancamentopesquisa/lancamentopesquisa.component';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { LancamentocadastroComponent } from './lancamentocadastro/lancamentocadastro.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    LancamentopesquisaComponent,
    LancamentocadastroComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    CalendarModule,
    CommonModule,
    SelectButtonModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    TooltipModule,
    CurrencyMaskModule,
    SharedModule,
  ],

  exports: [
    LancamentopesquisaComponent,
    LancamentocadastroComponent,
  ]
})
export class LancamentoModule { }
