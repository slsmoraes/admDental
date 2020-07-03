import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PessoapesquisaComponent } from './pessoapesquisa/pessoapesquisa.component';
import { PessoacadastroComponent } from './pessoacadastro/pessoacadastro.component';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';

import {InputMaskModule} from 'primeng/inputmask';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    PessoapesquisaComponent,
    PessoacadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    InputMaskModule,
    SharedModule,
  ],

  exports: [
    PessoapesquisaComponent,
    PessoacadastroComponent,
  ],

})
export class PessoaModule { }
