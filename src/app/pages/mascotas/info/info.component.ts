import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../../../model/mascota';
import { Cliente } from '../../../model/cliente';
import { MascotaService } from '../../../services/mascota.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css', '../../../app.component.css']
})
export class InfoComponent implements OnInit, AfterViewInit {
  mascota: Mascota | null = null;
  cliente: Cliente | null = null;

  constructor(private route: ActivatedRoute, private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.mascotaService.getMascotaById(id).subscribe(
        (mascota) => this.mascota = mascota
      );
      // Aquí puedes usar el id para cargar la información del cliente si es necesario
      // Ejemplo:
      // this.clienteService.getClienteByMascotaId(id).subscribe(cliente => this.cliente = cliente);
    });
  }

  ngAfterViewInit(): void {
    const cells = document.querySelectorAll("li span");
    cells.forEach(cell => {
      if (!cell.querySelector("img") && (cell.textContent?.trim() === "" || cell.textContent?.trim().toLowerCase() === "null")) {
        cell.textContent = "N/A";
      }
    });
  }
}
