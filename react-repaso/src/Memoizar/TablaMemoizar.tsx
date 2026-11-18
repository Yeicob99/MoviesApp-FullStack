import type Persona from "../persona.model";
import { memo, useCallback, useState } from "react";
import FilaMemoizar from "./FilaMemoizar";

const TablaMemoizar = memo(function TablaMemoizar() {
  console.log("renderizando tabla");

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

  const removerPersona = useCallback((persona: Persona) => {
    setPersonas((estadoActual) =>
      estadoActual.filter((p) => p.id !== persona.id),
    );
  }, []);

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
          <FilaMemoizar key={p.id} persona={p} remover={removerPersona} />
        ))}
      </tbody>
    </table>
  );
});

export default TablaMemoizar;
