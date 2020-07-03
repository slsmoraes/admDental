import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentocadastro',
  templateUrl: './lancamentocadastro.component.html',
  styleUrls: ['./lancamentocadastro.component.css']
})
export class LancamentocadastroComponent {

  tipos = [
    { label: 'Receita', value: 'RECEITA'},
    { label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [
    { label: 'Alimentação', value: '1'},
    { label: 'Transporte', value: '2'},
  ];

  pessoas = [
    { label: 'João da Silva', value: '1'},
    { label: 'Sebastão Moraes', value: '2'},
    { label: 'Marlene Moraes', value: '3'},
  ];

}
