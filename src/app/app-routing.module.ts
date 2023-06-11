import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { UtilitiesComponent } from './pages/utilities/utilities.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent, pathMatch:'full'
  },
  {
    path: 'location',
    component:LocationComponent
  },
  {
    path: 'utilities',
    component:UtilitiesComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
