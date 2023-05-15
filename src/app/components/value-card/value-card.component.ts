import { Component } from '@angular/core';

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.css']
})
export class ValueCardComponent {
  value:object = {
    title:"Educação infantil",
    Description:"Para alunos da educação infantil e fundamental I",
    prices:105,
  } 
}
