import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //atributos
  email_usuario: string | null = '';
  isLoggedIn: boolean = false;

  constructor() {

    //verificando se existe um token gravado na localstorage
    if (localStorage.getItem('access_token') != null
      && localStorage.getItem('email_usuario') != null) {

      this.isLoggedIn = true;
      this.email_usuario = localStorage.getItem('email_usuario');
    }
  }

  //função para sair do sistema
  logout(): void {
    if(confirm('Deseja realmente sair do sistema?')) {

      //apagando os dados gravados na localstorage
      localStorage.removeItem('access_token');
      localStorage.removeItem('email_usuario');

      window.location.href = '/'; //redirecionamento
    }
  }

}
