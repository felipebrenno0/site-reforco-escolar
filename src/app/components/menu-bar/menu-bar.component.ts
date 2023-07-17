import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, useAnimation, animateChild } from '@angular/animations'


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
  }

}
