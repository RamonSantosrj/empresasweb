import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordMatchValidation } from '../_validations/password-match.validation';
import { PasswordStrongValidation } from '../_validations/password-strong.validation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  //estrutura do formulário
  formCadastro = new FormGroup({

    nome: new FormControl('',
      [Validators.required, Validators.minLength(6)]),

    email: new FormControl('',
      [Validators.required, Validators.email]),

    senha: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),

    senhaConfirmacao: new FormControl('',
      [Validators.required])
  }, {
    //adicionando validações extras ao formulário
    validators: [
      PasswordMatchValidation.MatchPassword,
      PasswordStrongValidation.StrongPassword
    ]
  });

  //função para acessar na página os elementos do formulário
  get form(): any {
    return this.formCadastro.controls;
  }

  //função para enviar os dados para a API
  onSubmit(): void {

    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    this.httpClient.post(environment.apiRegisterUser, this.formCadastro.value,
      { responseType: 'text' })
      .subscribe(
        {
          next: (result) => {
            this.mensagem_sucesso = result;
            this.formCadastro.reset();
          },
          error: (e) => {
            this.mensagem_erro = e.error;
          }
        }
      )
  }

}
