import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './pages/panel/mascotas/mascotas.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ErrorComponent } from './pages/error/error.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { ClientesComponent } from './pages/panel/clientes/clientes.component';
import { DrogasComponent } from './pages/panel/drogas/drogas.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { VeterinariosComponent } from './pages/panel/veterinarios/veterinarios.component';
import { DashboardComponent } from './pages/panel/dashboard/dashboard.component';
import { SuministrarTratamientosComponent } from './pages/panel/suministrar-tratamientos/suministrar-tratamientos.component';
import { HistorialMedicoComponent } from './pages/panel/historial-medico/historial-medico.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'drogas', component: DrogasComponent },
  { path: 'admin/veterinarios', component: VeterinariosComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'suministrar-tratamiento', component: SuministrarTratamientosComponent },
  { path: 'historial-medico', component: HistorialMedicoComponent },
  { path: 'historial-medico/:id', component: HistorialMedicoComponent },
  { path: '', component: LandingComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
