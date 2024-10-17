import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HistorialMedicoDTO } from 'src/app/model/historial-medico-dto';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css'],
  providers: [MessageService]
})
export class HistorialMedicoComponent implements OnInit {
  mascotas: Mascota[] = [];
  selectedMascota!: Mascota;
  tratamientos: HistorialMedicoDTO[] = [];

  constructor(private mascotaService: MascotaService, private tratamientoService: TratamientoService, private veterinarioService: VeterinarioService , private messageService: MessageService) {}

  ngOnInit(): void {
    // Carga las mascotas al inicializar
    this.mascotaService
      .getMascotas()
      .subscribe((mascotas) => (this.mascotas = mascotas));
  }

  findHistorialMedico(): void {
    // Obtiene el historial médico de la mascota seleccionada
    if (this.selectedMascota) {
      this.tratamientoService
        .getHistorialMedicoByMascotaId(this.selectedMascota.id!)
        .subscribe((tratamientos) => {
          this.tratamientos = tratamientos;
          if(tratamientos.length === 0){
            this.messageService.add({ severity: 'info', summary: 'Información', detail: 'No se encontraron tratamientos para la mascota seleccionada', life: 3000 });
          }
        });
    }else{
      this.messageService.add({ severity: 'warn', summary: '¡Atención!', detail: 'Debes seleccionar una mascota', life: 3000 });
    }
  }


}
