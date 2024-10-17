import { Component, OnInit } from '@angular/core';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    isAdmin: boolean = false;
    urlProfile = '/assets/img/User.png';
    nombre = 'Administrador';

    constructor(private veterinarioService: VeterinarioService) { }

    ngOnInit(): void {
      const adminStatus = localStorage.getItem('admin');
      this.isAdmin = adminStatus === 'true'; // Verifica si el usuario es administrador

      if (!this.isAdmin) {
        const veterinarioId = Number(localStorage.getItem('idVeterinario'));
        this.veterinarioService
          .getVeterinarioById(veterinarioId).subscribe((veterinario) => {
            this.urlProfile = veterinario.urlFoto;
            this.nombre = veterinario.nombre;
          });
      }


    }
}
