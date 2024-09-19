import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css', '../../app.component.css']
})
export class MascotasComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotas = this.mascotaService.getMascotas();
  }

  deleteMascota(id: number): void {
    const success = this.mascotaService.deleteMascota(id);
    if (success) {
      this.mascotas = this.mascotas.filter(mascota => mascota.id !== id);
    } else {
      console.error('Error al eliminar la mascota');
    }
  }
}
