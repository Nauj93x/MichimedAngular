  import { Mascota } from './mascota';

  export interface Cliente {
    id?: number;
    cedula: string;
    nombre: string;
    email: string;
    contrasena: string;
    mascotas?: Mascota[];
  }
