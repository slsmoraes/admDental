import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissaoI: string;
  profissaoII: string;
  cidade: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  profissao = [
    { label: 'Engenheiro', value: 'ENG'},
    { label: 'Dentista', value: 'DEN'},
  ];

  cities = [
    { label: 'Nova York', value: 'NY'},
    { label: 'San Francisco', value: 'SF'},
    { label: 'Los Angeles', value: 'LA'},
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
  profissoes = ['Programador', 'Empresário', 'Outra'];
  profDefault = ['Programador'];

  cliente = new Cliente();

  salvar(form: NgForm) {
    //this.cliente.nome = form.value.nome;
    //this.cliente.email = form.value.email;
    //this.cliente.profissaoI = form.value.profissao;
    //this.cliente.profissaoII = form.value.profissaoII;

    console.log(form);

    form.reset();
  }
}
