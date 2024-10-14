import { Mascota } from './mascota';

export interface Veterinario {
  id?: number | null;
  cedula: string;
  nombre: string;
  contrasena: string;
  especialidad: string;
  urlFoto: string;
  mascotas?: Mascota[];
}
