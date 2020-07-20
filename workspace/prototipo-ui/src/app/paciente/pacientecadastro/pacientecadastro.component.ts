import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientecadastro',
  templateUrl: './pacientecadastro.component.html',
  styleUrls: ['./pacientecadastro.component.css']
})
export class PacientecadastroComponent implements OnInit  {
  tipo = [
    { label: 'Orçamento', value: 'ORCAMENTO'},
    { label: 'Orçamento Feito', value: 'ORCAMENTO FEITO'},
    { label: 'Contratado', value: 'CONTRATADO'},
    { label: 'Acrescimo', value: 'ACRESCIMO'},
    { label: 'Liquidado', value: 'LIQUIDADO'},
    { label: 'Fichado', value: 'FICHADO'},
  ];

  midia = [
    { label: 'Porta', value: 'PORTA'},
    { label: 'Internet', value: 'INTERNET'},
    { label: 'Rua', value: 'RUA'},
  ];

  dentista = [
    { label: 'Andressa', value: '4'},
    { label: 'Bianca', value: '5'},
    { label: 'Felipe Colyer', value: '1'},
    { label: 'Rafael', value: '2'},
    { label: 'Vinicius', value: '3'},
  ];

  especialidade = [
    { label: 'Clinica Geral', value: 'CGERAL'},
    { label: 'Orto', value: 'ORTO'},
  ];

  tabela = [
    { label: 'Medexpress', value: 'MEDEXPRESS'},
    { label: 'AMIL', value: 'AMIL'},
    { label: 'BRADESCO', value: 'BRADESCO'},
  ];

  constructor(

    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Paciente Cadastro');
  }
}
