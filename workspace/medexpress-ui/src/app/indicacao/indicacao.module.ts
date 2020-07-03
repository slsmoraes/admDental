import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicacaopesquisaComponent } from './indicacaopesquisa/indicacaopesquisa.component';

import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndicacaopesquisaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    FormsModule,
    SharedModule,
  ],
  exports:[
    IndicacaopesquisaComponent,
  ]
})
export class IndicacaoModule { }
