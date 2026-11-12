import Fila from "./Fila";
import type Persona from "./persona.model";
import { useState } from "react";

export default function Tabla() {
  const personasFuente: Persona[] = [
    { id: 1, nombre: "Juan Pérez", departamento: "Desarrollo" },
    { id: 2, nombre: "María Rodríguez", departamento: "Recursos Humanos" },
    { id: 3, nombre: "Carlos Gómez", departamento: "Finanzas" },
    { id: 4, nombre: "Ana Martínez", departamento: "Marketing" },
    { id: 5, nombre: "Pedro Sánchez", departamento: "Soporte Técnico" },
    { id: 6, nombre: "Laura Fernández", departamento: "Desarrollo" },
    { id: 7, nombre: "José Ramírez", departamento: "Ventas" },
  ];

  const [personas, setPersonas] = useState(personasFuente);

  const removerPersona = (persona: Persona) => {
    setPersonas(personas.filter((p) => p.id !== persona.id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Departamento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((p) => (
          <Fila key={p.id} persona={p} remover={removerPersona} />
        ))}
      </tbody>
    </table>
  );
}
