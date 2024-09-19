import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import {LandingComponent} from './pages/landing/landing.component'

const routes: Routes = [
  { path: 'mascotas', component: MascotasComponent },
  { path: '', component: LandingComponent}
  // otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
