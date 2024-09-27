import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { InfoComponent } from './pages/mascotas/info/info.component';
import { AddComponent } from './pages/mascotas/add/add.component';
import {UpdateComponent} from './pages/mascotas/update/update.component'
import { LandingComponent } from './pages/landing/landing.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: 'mascotas', component: MascotasComponent },
  { path: 'mascotas/add', component: AddComponent },
  { path: 'mascotas/update/:id', component: UpdateComponent },
  { path: 'mascotas/:id', component: InfoComponent },
  { path: '', component: LandingComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
