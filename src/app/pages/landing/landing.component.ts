import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Mascota } from '../../model/mascota';
import { MessageService } from 'primeng/api';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { HistorialMedicoDTO } from 'src/app/model/historial-medico-dto';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [MessageService]
})
export class LandingComponent {
  findMascotasDialog: boolean = false;
  viewTratamientosMascotaDialog: boolean = false;
  selectedMascota: Mascota | null = null;
  cedula: string = '';
  mascotas: Mascota[] = [];
  clientes: any[] = [];
  tratamientos: HistorialMedicoDTO[] = [];

  constructor(private clienteService: ClienteService, private messageService: MessageService, private tratamientoService: TratamientoService) {
    // Carga los clientes al incializar el componente
    this.clienteService.getClientes().subscribe(
      (clientes: any[]) => {
        this.clientes = clientes;
      },
      (error) => {
        console.error('Error al cargar los clientes:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar los clientes.' });
      }
    );
  }

  getSeverity(status: string): string {
    // Retorna la severidad del estado del tratamiento
    switch (status) {
      case 'En tratamiento':
        return 'info';
      case 'Tratado':
        return 'success';
      default:
        return 'warning';
    }
  }

  buscarMascota() {
    // Busca la mascota por su cedula
    const cedulaTrimmed = this.cedula.trim();

    if (!cedulaTrimmed) {
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Por favor ingresa una cédula válida' });
      return;
    }

    this.mascotas = [];
    let clienteEncontrado = false;

    for (const cliente of this.clientes) {
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

  showTratamientosMascotaDialog(){
    this.findMascotasDialog = false;
    this.viewTratamientosMascotaDialog = true;
  }

  verTratamientos(idMascota: number) {
    // Obtiene y muestra los tratamientos de una mascota
    this.tratamientoService
        .getHistorialMedicoByMascotaId(idMascota)
        .subscribe((tratamientos) => {
          if(tratamientos.length === 0){
            this.messageService.add({ severity: 'info', summary: 'Información', detail: 'No se encontraron tratamientos para la mascota seleccionada', life: 3000 });
          }else{
            this.tratamientos = tratamientos;
            this.showTratamientosMascotaDialog();
          }
        });
  }

  ngAfterViewInit() {
    // Inicializa el carrusel
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
