import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, useAnimation, animateChild } from '@angular/animations'


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('open', style({ opacity: 1, })),
      state('closed', style({ opacity: 0 })),
      transition('closed <=> open', [
        animate('600ms', keyframes([
          style({ opacity: 0, transform: 'translateX(70%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
        ]))
      ])
    ]), trigger('fadeNav', [
      state('closed', style({ background: 'transparent' })),
      state('open', style({ background: '#045677' })),
      transition('closed <=> open', animate('300ms')),])
  ],
})


export class MenuBarComponent {
  

  menuState: 'open' | 'closed' = 'closed';
  menuVariable:boolean = false

  toggleMenu(){
    this.menuVariable = !this.menuVariable
  }

  animationMenu(){
    this.menuState = this.menuState === 'open' ? 'closed' : 'open';
  }

}
