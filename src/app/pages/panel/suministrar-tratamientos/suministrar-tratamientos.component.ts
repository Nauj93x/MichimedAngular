import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Droga } from 'src/app/model/droga';
import { Mascota } from 'src/app/model/mascota';
import { Tratamiento } from 'src/app/model/tratamiento';
import { Veterinario } from 'src/app/model/veterinario';
import { DrogaService } from 'src/app/services/drogas.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-suministrar-tratamientos',
  templateUrl: './suministrar-tratamientos.component.html',
  styleUrls: ['./suministrar-tratamientos.component.css'],
  providers: [MessageService],
})
export class SuministrarTratamientosComponent implements OnInit {

  mascotas: Mascota[] = [];
  veterinarios: Veterinario[] = [];
  drogas: Droga[] = [];
  nombreVeterinario = '';
  veterinario: Veterinario = {nombre: '', contrasena: '', especialidad: '', cedula: '', urlFoto: ''};

  tratamiento: Tratamiento = {fecha: ''};

  isAdmin = localStorage.getItem('admin') === 'true';

  constructor(
    private mascotaService: MascotaService,
    private veterinarioService: VeterinarioService,
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // Carga las mascotas en tratamiento
    this.mascotaService
      .getMascotas()
      .subscribe((mascotas) => {
        this.mascotas = mascotas.filter(mascota => mascota.estado === 'En tratamiento');
      });

      // Carga las dorgas disponibles
    this.drogaService
      .getDrogas()
      .subscribe((drogas) => (this.drogas = drogas));

      // Carga los datos de veterinario si el ususario no es admin
    if (this.isAdmin) {
      this.veterinarioService.getVeterinarios().subscribe((veterinarios)  => (this.veterinarios = veterinarios));
    }else{
      const veterinarioId = Number(localStorage.getItem('idVeterinario'));
      this.veterinarioService
        .getVeterinarioById(veterinarioId).subscribe((veterinario) => {
          this.tratamiento.veterinario = veterinario;
          this.nombreVeterinario = veterinario.nombre;
          this.veterinario = veterinario;
        });
    }
  }

  saveTratamiento(): void {

    if(!this.tratamiento.mascota){
      this.messageService.add({ severity: 'warn', summary: '¡Error!', detail: 'Selecciona una mascota', life: 3000 });
      return;
    }

    if(!this.tratamiento.veterinario){
      this.messageService.add({ severity: 'warn', summary: '¡Error!', detail: 'Selecciona un veterinario', life: 3000 });
      return;
    }

    if(!this.tratamiento.droga){
      this.messageService.add({ severity: 'warn', summary: '¡Error!', detail: 'Selecciona una droga', life: 3000 });
      return;
    }

    // Formatea la fecha actual
    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(-2)}`;
    this.tratamiento.fecha = formattedDate;

    if(this.tratamiento.droga?.uniDisp === 0){
      this.messageService.add({ severity: 'error', summary: '¡Error!', detail: 'No hay unidades disponibles de la droga seleccionada', life: 3000 });
      return;
    }

    this.tratamiento.droga!.uniDisp -= 1;
    this.tratamiento.droga!.uniVend += 1;

    // Guarda el tratamiento
    this.tratamientoService.addTratamiento(this.tratamiento);

    this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'Tratamiento creado', life: 3000 });

    // Reinicia el tratamieno si el user no es admin
    if(!this.isAdmin){
      this.tratamiento = {fecha: '', veterinario: this.veterinario};
    }else{
      this.tratamiento = {fecha: ''};
    }
  }

}
