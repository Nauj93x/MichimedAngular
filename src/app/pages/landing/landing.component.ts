import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service'; 
import { Mascota } from '../../model/mascota'; 
import { MessageService } from 'primeng/api'; 

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [MessageService]
})
export class LandingComponent {
  findMascotasDialog: boolean = false;
  viewMascotaDialog: boolean = false;
  selectedMascota: Mascota | null = null;
  cedula: string = '';
  mascotas: Mascota[] = [];
  clientes: any[] = [];

  constructor(private clienteService: ClienteService, private messageService: MessageService) {
    this.clienteService.getClientes().subscribe(
      (clientes: any[]) => {
        this.clientes = clientes;
        console.log('Clientes cargados:', this.clientes); 
      },
      (error) => {
        console.error('Error al cargar los clientes:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar los clientes.' });
      }
    );
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'En tratamiento':
        return 'info';
      case 'Tratado':
        return 'success';
      default:
        return 'warning';
    }
  }

  openView(mascota: Mascota): void {
    this.selectedMascota = mascota;
    this.viewMascotaDialog = true;
  }

  buscarMascota() {
    const cedulaTrimmed = this.cedula.trim();
  
    if (!cedulaTrimmed) {
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Por favor ingresa una cédula válida' });
      return;
    }
  
    this.mascotas = [];
    let clienteEncontrado = false;

    console.log('Cédula ingresada:', cedulaTrimmed);
  
    for (const cliente of this.clientes) {
      console.log('Cédula del cliente:', cliente.cedula);

      if (cliente.cedula && cliente.cedula === cedulaTrimmed) {
        clienteEncontrado = true;
        console.log('Cliente encontrado:', cliente);

        this.clienteService.getClienteMascotas(cliente.id).subscribe(
          (clienteMascotas: Mascota[]) => {
            console.log('Mascotas encontradas:', clienteMascotas); 

            if (clienteMascotas.length > 0) {
              this.mascotas = clienteMascotas;
            } else {
              this.messageService.add({ severity: 'info', summary: 'Sin mascotas', detail: 'No se encontraron mascotas para esta cédula.' });
            }
          },
          (error) => {
            console.error('Error al obtener mascotas:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al buscar las mascotas del cliente.' });
          }
        );
        break; // Cliente encontrado, no es necesario seguir iterando
      }
    }

    if (!clienteEncontrado) {
      console.log('Cliente no encontrado con esa cédula.');
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se encontró un cliente con la cédula ingresada.' });
    }
  }

  showFindMascotasDialog() {
    this.findMascotasDialog = true;
  }

  ngAfterViewInit() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    let currentSlide = 0;

    function showSlide(n: number) {
      currentSlide = (n + slides.length) % slides.length;
      if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 5000);
  }
}
