import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  
})


export class MenuBarComponent {
  

  menuState: 'open' | 'closed' = 'closed';
  menuVariable:boolean = false
  menuVisible:boolean = true

  toggleMenu(){
    this.menuVariable = !this.menuVariable
    this.menuVisible = !this.menuVisible
  }

  closeMenu(){
    this.menuVariable = false
    this.menuVisible = true
  } 

  @Input()
  fragment?:string

}
