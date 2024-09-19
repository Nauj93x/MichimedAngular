  import { Mascota } from './mascota';

  export interface Cliente {
    id: number | null;
    cedula: string;
    nombre: string;
    email: string;
    contrasena: string;
    mascotas: Mascota[];
  }
