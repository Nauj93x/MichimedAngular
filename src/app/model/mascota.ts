import { Cliente } from "./cliente";

export interface Mascota {
    id?: number;
    nombre: string;
    edad?: number;
    raza: string;
    peso?: number;
    enfermedad: string;
    estado: string;
    fechaEntrada: string;
    fechaSalida: string;
    medicamento: string;
    foto: string;
    cliente?: Cliente;
}
