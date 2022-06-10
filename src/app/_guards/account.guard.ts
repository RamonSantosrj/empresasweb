import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

/*
    Guardião para as rotas:
        /(raiz)
        /register-user
        /password-recover
*/
@Injectable()
export class AccountGuard implements CanActivate {

    canActivate() {

        //REGRA: Só acessar se o usuário NÃO estiver autenticado
        if (localStorage.getItem('access_token') == null
            || localStorage.getItem('email_usuario') == null) {
            return true;
        }
        else {
            window.location.href = '/empresas-consulta';
            return false;
        }
    }

}