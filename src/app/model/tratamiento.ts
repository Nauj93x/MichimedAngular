import { Droga } from './droga';
import { Veterinario } from './veterinario';
import { Mascota } from './mascota';

export interface Tratamiento {
  id: number | null;
  fecha: string;
  mascota: Mascota | null;
  veterinario: Veterinario | null;
  drogas?: Droga[];
}
