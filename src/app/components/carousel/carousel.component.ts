import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  //eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: false, showIndicators: true } }
  ]
})

export class CarouselComponent  {
}
