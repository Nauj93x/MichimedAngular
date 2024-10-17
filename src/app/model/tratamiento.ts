import { Droga } from './droga';
import { Veterinario } from './veterinario';
import { Mascota } from './mascota';

export interface Tratamiento {
  id?: number;
  fecha: string;
  mascota?: Mascota;
  veterinario?: Veterinario;
  droga?: Droga;
}
