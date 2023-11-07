import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.css']
})
export class ValueCardComponent {
  
  @Input()
  title:string = ''
  @Input()
  description: string = ''
  @Input()
  prices:number = 0
  @Input()
  message:string = ''

}
