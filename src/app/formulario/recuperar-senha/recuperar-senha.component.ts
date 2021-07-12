import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  document.querySelector('html').style.background = 'linear-gradient(to right, #020024, #27bc0b, #41be2b)';

  }
 ngOnDestroy(): void{
   document.querySelector('html').style.background = 'none';
 }
 backToLogin(){
   this.router.navigate(['/login']);
 }
}
