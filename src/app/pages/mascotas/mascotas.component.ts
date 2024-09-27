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
    this.mascotaService.getMascotas().subscribe(
      (mascotas) => this.mascotas = mascotas
    );
  }

  deleteMascota(id: number): void {
    this.mascotaService.deleteMascota(id);
    //Agregar nuevamente validación para eliminar mascota de la lista
    this.mascotas = this.mascotas.filter(mascota => mascota.id !== id);
  }
}
