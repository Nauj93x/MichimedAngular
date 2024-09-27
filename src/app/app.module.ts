import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/landing/header/header.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './pages/landing/landing.component';
import { InfoComponent } from './pages/mascotas/info/info.component';
import { AddComponent } from './pages/mascotas/add/add.component';
import { UpdateComponent } from './pages/mascotas/update/update.component';
import { MascotaFormComponent } from './components/panel/layout/mascota-form/mascota-form.component';
import { LayoutComponent } from './components/panel/layout/layout.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MascotasComponent,
    LandingComponent,
    InfoComponent,
    AddComponent,
    UpdateComponent,
    MascotaFormComponent,
    LayoutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de que ReactiveFormsModule esté aquí
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
