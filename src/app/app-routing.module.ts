import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'home', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
