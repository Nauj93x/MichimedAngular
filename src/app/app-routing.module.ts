import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ErrorComponent } from './pages/error/error.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DrogasComponent } from './pages/drogas/drogas.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { VeterinariosComponent } from './pages/veterinarios/veterinarios.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'drogas', component: DrogasComponent },
  { path: 'veterinarios', component: VeterinariosComponent },
  { path: '', component: LandingComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
