import { Mascota } from './mascota';  // Interfaz Mascota

export interface Cliente {
  id: number | null;
  cedula: string;
  nombre: string;
  email: string;
  contrasena: string;
  mascotas: Mascota[];  // Relación OneToMany con Mascota
}
