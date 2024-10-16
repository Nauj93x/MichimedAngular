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
  drogas: Droga[] = [];
  nombreVeterinario = '';
  veterinario: Veterinario = {nombre: '', contrasena: '', especialidad: '', cedula: '', urlFoto: ''};

  tratamiento: Tratamiento = {fecha: ''};

  constructor(
    private mascotaService: MascotaService,
    private veterinarioService: VeterinarioService,
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.mascotaService
      .getMascotas()
      .subscribe((mascotas) => (this.mascotas = mascotas));

    this.drogaService
      .getDrogas()
      .subscribe((drogas) => (this.drogas = drogas));

    const veterinarioId = Number(localStorage.getItem('idVeterinario'));
    this.veterinarioService
      .getVeterinarioById(veterinarioId).subscribe((veterinario) => {
        this.tratamiento.veterinario = veterinario;
        this.nombreVeterinario = veterinario.nombre;
        this.veterinario = veterinario;
      });
  }

  saveTratamiento(): void {
    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(-2)}`;
    this.tratamiento.fecha = formattedDate;
    console.log(this.tratamiento);

    this.tratamientoService.addTratamiento(this.tratamiento);

    this.messageService.add({ severity: 'success', summary: '¡Exitoso!', detail: 'Tratamiento creado', life: 3000 });


    this.tratamiento = {fecha: '', veterinario: this.veterinario};
  }

}
