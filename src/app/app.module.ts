import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { RelatorioReceitaComponent } from './receita/relatorio-receita/relatorio-receita.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CadastrosComponent } from './formulario/cadastros/cadastros.component';
import { DespesaComponent } from './despesa/despesa.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './formulario/recuperar-senha/recuperar-senha.component';
import { CadastrarUsuarioComponent } from './formulario/cadastrar-usuario/cadastrar-usuario.component';

// material design modules
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RelatorioReceitaComponent,
    DashboardComponent,
    CadastrosComponent,
    DespesaComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    CadastrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
