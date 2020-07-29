import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { PacienteModule } from './paciente/paciente.module';
import { OrcamentoModule } from './orcamento/orcamento.module';

import { OrcamentopesquisaComponent } from './orcamento/orcamentopesquisa/orcamentopesquisa.component';
import { OrcamentocadastroComponent } from './orcamento/orcamentocadastro/orcamentocadastro.component';
import { PacientepesquisaComponent } from './paciente/pacientepesquisa/pacientepesquisa.component';
import { PacientecadastroComponent } from './paciente/pacientecadastro/pacientecadastro.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: 'paciente', component: PacientepesquisaComponent },
  { path: 'pacientecadastro', component: PacientecadastroComponent },
  { path: 'pacientecadastro/:codigo', component: PacientecadastroComponent },
  { path: 'orcamento', component: OrcamentopesquisaComponent },
  { path: 'orcamento/novo', component: OrcamentocadastroComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    PacienteModule,
    OrcamentoModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

