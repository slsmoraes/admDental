import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicacaopesquisa',
  templateUrl: './indicacaopesquisa.component.html',
  styleUrls: ['./indicacaopesquisa.component.css']
})
export class IndicacaopesquisaComponent {

  midias = [
    { id: '1', descricao: 'Cliente'},
    { id: '2', descricao: 'Internet'},
    { id: '3', descricao: 'Porta'},
    { id: '4', descricao: 'Rua'}
  ];
}
