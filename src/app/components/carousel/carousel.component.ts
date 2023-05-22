import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  //eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [
      { 
        provide: CarouselConfig, 
        useValue: { interval: 2000, 
        noPause: true, 
        showIndicators: true, 
        itemsPerSlide: 3,
        noWarp: true, 
        singleSlideOffset: true
        } 
    }
  ]
})

export class CarouselComponent  {
 
  slides = [
    {image: './../../../assets/images/imgStudy3.jpeg'},
    {image: './../../../assets/images/atvd9.jpeg'},
    {image: './../../../assets/images/atvd8.jpeg'},
    {image: './../../../assets/images/atvd5.jpeg'}
    
  ];
 

}
