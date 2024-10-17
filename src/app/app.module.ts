import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes de tu aplicación
import { HeaderComponent } from './components/landing/header/header.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { MascotasComponent } from './pages/panel/mascotas/mascotas.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LayoutComponent } from './components/panel/layout/layout.component';
import { ErrorComponent } from './pages/error/error.component';
import { DrogasComponent } from './pages/panel/drogas/drogas.component';  // Asegúrate de que DrogasComponent esté creado
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { ClientesComponent } from './pages/panel/clientes/clientes.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { VeterinariosComponent } from './pages/panel/veterinarios/veterinarios.component';
import { DashboardComponent } from './pages/panel/dashboard/dashboard.component';
import { SuministrarTratamientosComponent } from './pages/panel/suministrar-tratamientos/suministrar-tratamientos.component';
import { HistorialMedicoComponent } from './pages/panel/historial-medico/historial-medico.component';
import { LoaderComponent } from './components/loader/loader.component';

// Servicios (asegúrate de crear e importar el servicio si es necesario)
import { DrogaService } from './services/drogas.service';  // Importa el servicio DrogaService

// PrimeNG Components
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ImageModule } from 'primeng/image';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ChartModule } from 'primeng/chart';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { CircularDiagramComponent } from './components/circular-diagram/circular-diagram.component';
import { LinesChartComponent } from './components/lines-chart/lines-chart.component';
import { DrogasAuxTableComponent } from './components/drogas-aux-table/drogas-aux-table.component';
import { ProfitComponent } from './components/profit/profit.component';
import { VeterinariosDsComponent } from './components/veterinarios-ds/veterinarios-ds.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MascotasComponent,
    LandingComponent,
    LayoutComponent,
    ErrorComponent,
    SignInComponent,
    ClientesComponent,
    DrogasComponent,
    SignUpComponent,
    VeterinariosComponent,
    DashboardComponent,
    SuministrarTratamientosComponent,
    HistorialMedicoComponent,
    CircularDiagramComponent,
    LinesChartComponent,
    DrogasAuxTableComponent,
    ProfitComponent,
    LoaderComponent,
    VeterinariosDsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,  // Asegúrate de que HttpClientModule esté importado para manejar peticiones HTTP
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  // Asegúrate de que ReactiveFormsModule esté aquí para formularios reactivos
    TableModule,          // Componentes de PrimeNG
    TagModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    PaginatorModule,
    ToastModule,
    DialogModule,
    InputNumberModule,
    ImageModule,
    ConfirmDialogModule,
    ChartModule,
    FileUploadModule,
    MultiSelectModule,
    TimelineModule,
    CardModule
  ],
  providers: [
    DrogaService   // Añade el servicio DrogaService en los providers si es necesario
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
