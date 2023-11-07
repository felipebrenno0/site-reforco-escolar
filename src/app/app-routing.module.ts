import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UtilitiesComponent } from './pages/utilities/utilities.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent, pathMatch:'full'
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
