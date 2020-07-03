import { Title } from '@angular/platform-browser';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-pacientepesquisa',
  templateUrl: './pacientepesquisa.component.html',
  styleUrls: ['./pacientepesquisa.component.css']
})
export class PacientepesquisaComponent implements OnInit {
  pacientepesquisa = [
    { cod: '2000', cpf: '346.458.377-53', nome: 'Moraes', fone: '21-99514-9753'},
    { cod: '2001', cpf: '346.458.377-97', nome: 'Marlene Moraes', fone: '31-99542-9876'}
    ];

  constructor(

    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Paciente Pesquisa');
  }
}
