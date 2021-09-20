import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/app/models/despesa';
import { Receita } from 'src/app/models/receita';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
auxObject = {count: 100, data: []};
listDespesas: Despesa[];
listReceitas: Receita[];
 

  constructor() { }

  ngOnInit(): void {
    this.populateDespesas();
    this.populateReceitas();
    
  }
  populateReceitas() {
    for( let i = 0; i < this.auxObject.count; i++){
      this.auxObject.data.push({
        id:i,
        data:'2' + '1'+'/' +'12'+ '/' + '20' + i,
        valor: 'R$' + i + i + i + i,
        tipo: 'Aluguel',
        descriçao: 'caro, podendo ser ate maior que' + i,
        fixo : true
      });
        this.listReceitas = this.auxObject.data;
          }
          this.auxObject.data = [];
        }
  
  
    populateDespesas() {
    for( let i = 0; i < this.auxObject.count; i++){
    this.auxObject.data.push({
    id:i,
    data:'2' + '1'+'/' +'12'+ '/' + '20' + i,
    valor: 'R$' + i + i + i + i,
    tipo: 'Aluguel',
    descriçao: 'caro, podendo ser ate maior que' + i,
    fixo : true
    });
    this.listDespesas = this.auxObject.data;
    }
    this.auxObject.data = [];
    }
  }

