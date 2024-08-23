import { Component, OnInit } from '@angular/core';
import {Clientes} from "../interfaces/clientes";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

  clientes: Clientes[] = [
    { nome: "João da Silva", cpf: "123.456.789-01" },
    { nome: "Maria Oliveira", cpf: "234.567.890-12" },
    { nome: "Carlos Pereira", cpf: "345.678.901-23" },
    { nome: "Ana Souza", cpf: "456.789.012-34" },
    { nome: "José Fernandes", cpf: "567.890.123-45" },
    { nome: "Fernanda Costa", cpf: "678.901.234-56" },
    { nome: "Pedro Martins", cpf: "789.012.345-67" },
    { nome: "Lucas Almeida", cpf: "890.123.456-78" },
    { nome: "Beatriz Rocha", cpf: "901.234.567-89" },
    { nome: "Rafael Santos", cpf: "012.345.678-90" }
  ];


  constructor() { }

  ngOnInit() {
  }

  nome: string = '';
  cpf: string = '';
  senha: string = '';

  adicionarCliente() {
    if (this.nome.trim() && this.cpf.trim()) {
      const novoCliente: Clientes = {
        nome: this.nome.trim(),
        cpf: this.cpf.trim()
      };
      this.clientes.push(novoCliente);
      this.limparCampos();
    }
  }

  limparCampos() {
    this.nome = '';
    this.cpf = '';
    this.senha = '';
  }
}
