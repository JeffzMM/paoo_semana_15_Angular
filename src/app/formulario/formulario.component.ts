import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor() { }

  cursos = ['ADS', 'RH', 'Gestão Comercial', 'Eventos'];

  pessoa: Pessoa = new Pessoa();

  cadastros = [{}];

  salvar(pessoaForm): void {
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.idade = pessoaForm.value.idade;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.curso = pessoaForm.value.curso;

    console.log(this.pessoa);
  }

  obterEstilosParaOBotao() {
    return {
      backgroundColor: '#050005',
      border: 'none',
    }
  }

  obterEstilosParaOFundo() {
    return {
      backgroundColor: '#b98274',
    }
  }

}
