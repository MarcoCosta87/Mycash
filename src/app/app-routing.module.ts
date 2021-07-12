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
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
{path: '', redirectTo:'/login', pathMatch: 'full'},
{path:'login',component: LoginComponent},
{path:'dashboard',component: DashboardComponent,canActivate:[AuthGuard]},
{path:'despesa',component: DespesaComponent,canActivate:[AuthGuard]},
{path:'relatorio-receita',component: RelatorioReceitaComponent,canActivate:[AuthGuard]},
{path:'cadastrar-usuario',component: CadastrarUsuarioComponent},
{path:'recuperar-senha',component: RecuperarSenhaComponent},
{path:'cadastro',component: CadastrosComponent,canActivate:[AuthGuard]},
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
