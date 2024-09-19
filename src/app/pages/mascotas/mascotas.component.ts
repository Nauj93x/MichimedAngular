import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../model/mascota';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css', '../../app.component.css']
})
export class MascotasComponent implements OnInit {
  mascotas: Mascota[] = [];

  ngOnInit(): void {
    // Aquí puedes inicializar la lista de mascotas, por ejemplo, llamando a un servicio
    this.mascotas = [
      {
        id: 1,
        nombre: 'Michi',
        edad: 2,
        raza: 'Siamés',
        peso: 4.5,
        enfermedad: 'Ninguna',
        estado: 'Sano',
        fechaEntrada: '2022-01-01',
        fechaSalida: '2022-01-10',
        medicamento: 'Ninguno',
        foto: '/assets/img/michi.jpg'
      },
      // Agrega más mascotas según sea necesario
    ];
  }
}
