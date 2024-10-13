import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service'; // Asegúrate de importar el servicio
import { Mascota } from '../../model/mascota'; // Asegúrate de importar el modelo Mascota
import { MessageService } from 'primeng/api'; // Para el popup de notificaciones

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [MessageService] // Asegúrate de inyectar el servicio de mensajes
})
export class LandingComponent {

  findMascotasDialog: boolean = false;
  viewMascotaDialog: boolean = false;
  selectedMascota: Mascota | null = null;
  cedula: string = '';
  mascotas: Mascota[] = [];
  clientes: any[] = []; // Asegúrate de tener una lista de clientes

  constructor(private clienteService: ClienteService, private messageService: MessageService) {
    // Obtén los clientes al iniciar el componente
    this.clienteService.getClientes().subscribe((clientes: any[]) => {
      this.clientes = clientes;
      console.log('Clientes cargados:', this.clientes); // Verifica que se están cargando correctamente los clientes
    });
  }

    // Función para determinar la severidad del estado
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

  // Función para abrir el diálogo con más detalles de la mascota
  openView(mascota: Mascota): void {
    this.selectedMascota = mascota;
    this.viewMascotaDialog = true; // Muestra el diálogo
  }

  buscarMascota() {
    const cedulaTrimmed = this.cedula.trim(); // Eliminar espacios en blanco

    if (!cedulaTrimmed) {
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Por favor ingresa una cédula válida' });
      return;
    }

    this.mascotas = []; // Reinicia la lista de mascotas
    let clienteEncontrado = false;

    // Depuración: Verificar la cédula ingresada
    console.log('Cédula ingresada:', cedulaTrimmed);

    for (const cliente of this.clientes) {
      // Depuración: Mostrar la cédula del cliente
      console.log('Cédula del cliente:', cliente.cedula);

      if (cliente.cedula && cliente.cedula === cedulaTrimmed) {
        clienteEncontrado = true;
        this.clienteService.getClienteMascotas(cliente.id).subscribe(
          (clienteMascotas: Mascota[]) => {
            if (clienteMascotas.length > 0) {
              this.mascotas = clienteMascotas;
            } else {
              this.messageService.add({ severity: 'info', summary: 'Sin mascotas', detail: 'No se encontraron mascotas para esta cédula.' });
            }
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al buscar las mascotas del cliente.' });
          }
        );
      }
    }

    if (!clienteEncontrado) {
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
