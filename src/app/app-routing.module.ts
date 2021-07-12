import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DespesaComponent } from './despesa/despesa.component';
import { componentFactoryName } from '@angular/compiler';
import { RelatorioReceitaComponent } from './receita/relatorio-receita/relatorio-receita.component';
import { CadastrarUsuarioComponent } from './formulario/cadastrar-usuario/cadastrar-usuario.component';
import { RecuperarSenhaComponent } from './formulario/recuperar-senha/recuperar-senha.component';
import { CadastrosComponent } from './formulario/cadastros/cadastros.component';

const routes: Routes = [
{path: '', redirectTo:'/login', pathMatch: 'full'},
{path:'login',component: LoginComponent},
{path:'dashboard',component: DashboardComponent},
{path:'despesa',component: DespesaComponent},
{path:'relatorio-receita',component: RelatorioReceitaComponent},
{path:'cadastrar-usuario',component: CadastrarUsuarioComponent},
{path:'recuperar-senha',component: RecuperarSenhaComponent},
{path:'cadastro',component: CadastrosComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
