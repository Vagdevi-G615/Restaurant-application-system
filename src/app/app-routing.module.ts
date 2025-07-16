import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';

const routes: Routes = [
 
 {
   path:'restaurent' , component: RestaurentDashComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
