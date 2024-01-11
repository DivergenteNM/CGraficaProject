import { Estudiante } from "./estudiante";

export interface Programa {
    id: String;
    nombre: String;
    estudiantes: Estudiante[];
}