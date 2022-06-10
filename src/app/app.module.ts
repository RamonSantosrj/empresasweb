import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_helpers/interceptor.helper';
import { AccountGuard } from './_guards/account.guard';
import { EmpresasGuard } from './_guards/empresas.guard';

import { AppComponent } from './app.component';
import { EmpresasCadastroComponent } from './empresas-cadastro/empresas-cadastro.component';
import { EmpresasConsultaComponent } from './empresas-consulta/empresas-consulta.component';
import { EmpresasEdicaoComponent } from './empresas-edicao/empresas-edicao.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';

//mapeamento das rotas (URLs) do projeto
const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent, canActivate: [AccountGuard] },
  { path: 'register-user', component: RegisterUserComponent, canActivate: [AccountGuard] },
  { path: 'password-recover', component: PasswordRecoverComponent, canActivate: [AccountGuard] },
  { path: 'empresas-cadastro', component: EmpresasCadastroComponent, canActivate: [EmpresasGuard] },
  { path: 'empresas-consulta', component: EmpresasConsultaComponent, canActivate: [EmpresasGuard] },
  { path: 'empresas-edicao/:idEmpresa', component: EmpresasEdicaoComponent, canActivate: [EmpresasGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    EmpresasCadastroComponent,
    EmpresasConsultaComponent,
    EmpresasEdicaoComponent,
    LoginComponent,
    RegisterUserComponent,
    PasswordRecoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AccountGuard,
    EmpresasGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
