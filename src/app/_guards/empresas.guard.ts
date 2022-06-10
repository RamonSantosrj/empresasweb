import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

/*
    Guardião para as rotas:
        /empresas-cadastro
        /empresas-consulta
        /empresas-edicao/:id
*/
@Injectable()
export class EmpresasGuard implements CanActivate {

    canActivate() {

        //REGRA: Só acessar se o usuário ESTIVER autenticado
        if (localStorage.getItem('access_token') != null
            && localStorage.getItem('email_usuario') != null) {
            return true;
        }
        else {
            window.location.href = '/';
            return false;
        }
    }

}