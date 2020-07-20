import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamentocadastro',
  templateUrl: './orcamentocadastro.component.html',
  styleUrls: ['./orcamentocadastro.component.css']
})
export class OrcamentocadastroComponent {

  tipo = [
    { label: 'Orçamento', value: 'ORCAMTO'},
    { label: 'Orçamento Feito', value: 'ORCAMTO FEITO'},
    { label: 'Contratado', value: 'CONTRATADO'},
    { label: 'Acrescimo', value: 'ACRESCIMO'},
    { label: 'Liquidado', value: 'LIQUIDADO'},
    { label: 'Fichado', value: 'FICHHADO'},
  ];

  uf = [
    { label: 'RJ', value: 'RJ'},
    { label: 'SP', value: 'SP'},
    { label: 'MG', value: 'MG'},
  ];

  dentista = [
    { label: 'Andressa', value: '4'},
    { label: 'Bianca', value: '5'},
    { label: 'Felipe Colyer', value: '1'},
    { label: 'Rafael', value: '2'},
    { label: 'Vinicius', value: '3'},
  ];

  paciente = [
    { label: 'Alan Ventura', value: '23038'},
    { label: 'Amanda', value: '23031'},
    { label: 'Gessica Dos Santos Da Costa', value: '23039'},
    { label: 'Jakson Ferreira Da Silva', value: '23023'},
    { label: 'Jessica Santos Da Costa', value: '23039'},
    { label: 'Julia Mirella', value: '23042'},
    { label: 'Larissa Milena', value: '23039'},
    { label: 'Luciene Germano Silva Ferreira', value: '23026'},
    { label: 'Micaele Alice Carvalho', value: '23028'},
    { label: 'Rosilene Cristina S Freitas', value: '19303'},
    { label: 'Sabrina Damasio', value: '23021'},
    { label: 'Suellen Assis', value: '23040'},
  ];

  especialidade = [
    { label: 'Clinica Geral', value: 'CGERAL'},
    { label: 'Endodontia', value: 'ENDO'},
    { label: 'Implante', value: 'IMPLANTO'},
    { label: 'Ortodontia', value: 'ORTO'},
    { label: 'Periodontia', value: 'PERIO'},
  ];

  midia = [
    { label: 'Clinica', value: '1'},
    { label: 'Porta', value: '2'},
    { label: 'Rua', value: '3'},
    { label: 'Ortodontia', value: '4'},
  ];

  indicante = [
    { label: 'Eliane', value: '1'},
    { label: 'Antonio', value: '2'},
    { label: 'Anibal', value: '3'},
    { label: 'Valesca', value: '4'},
  ];

  tabela = [
    { label: 'Tab 1', value: '1'},
    { label: 'Tab 2', value: '2'},
    { label: 'Tab 3', value: '3'},
    { label: 'Tab 4', value: '4'},
  ];
}
