import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { UtilitiesComponent } from './pages/utilities/utilities.component';

import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MainInformationComponent } from './components/main-information/main-information.component';
import { ValuesComponent } from './components/values/values.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ValueCardComponent } from './components/values/value-card/value-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapsComponent } from './components/card-location/maps/maps.component';
import { CardLocationComponent } from './components/card-location/card-location.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainCardComponent,
    MainInformationComponent,
    HomeComponent,
    ValuesComponent,
    UtilitiesComponent,
    CarouselComponent,
    LocationComponent,
    ValueCardComponent,
    FooterComponent,
    MapsComponent,
    CardLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
