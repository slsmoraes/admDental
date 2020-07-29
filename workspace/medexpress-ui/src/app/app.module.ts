import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

import { IndicacaoModule } from './indicacao/indicacao.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { PacienteModule } from './paciente/paciente.module';
import { OrcamentoModule } from './orcamento/orcamento.module';
import { FormularioModule } from './formulario/formulario.module';

import { LancamentopesquisaComponent } from './lancamento/lancamentopesquisa/lancamentopesquisa.component';
import { LancamentocadastroComponent } from './lancamento/lancamentocadastro/lancamentocadastro.component';
import { PessoapesquisaComponent } from './pessoa/pessoapesquisa/pessoapesquisa.component';
import { PessoacadastroComponent} from './pessoa/pessoacadastro/pessoacadastro.component';
import { OrcamentopesquisaComponent } from './orcamento/orcamentopesquisa/orcamentopesquisa.component';
import { OrcamentocadastroComponent } from './orcamento/orcamentocadastro/orcamentocadastro.component';
import { PacientepesquisaComponent } from './paciente/pacientepesquisa/pacientepesquisa.component';
import { PacientecadastroComponent } from './paciente/pacientecadastro/pacientecadastro.component';
import { from } from 'rxjs';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: '', redirectTo: 'paciente', pathMatch: 'full' },
  { path: 'paciente', component: PacientepesquisaComponent },
  { path: 'pacientecadastro', component: PacientecadastroComponent },
  { path: 'orcamento', component: OrcamentopesquisaComponent },
  { path: 'orcamento/novo', component: OrcamentocadastroComponent },
  { path: 'lancamentos', component: LancamentopesquisaComponent },
  { path: 'lancamentos/novo', component: LancamentocadastroComponent },
  { path: 'pessoas', component: PessoapesquisaComponent },
  { path: 'pessoas/novo', component: PessoacadastroComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' },

];

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    CoreModule,
    IndicacaoModule,
    LancamentoModule,
    PessoaModule,
    PacienteModule,
    OrcamentoModule,
    FormularioModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
