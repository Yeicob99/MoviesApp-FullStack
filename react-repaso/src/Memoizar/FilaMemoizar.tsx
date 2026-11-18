import type Persona from "../persona.model";

export default function FilaMemoizar({ persona, remover }: FilaProps) {
  if (persona.nombre === "Roberto") {
    throw Error();
  }

  return (
    <tr>
      <td>{persona.nombre}</td>
      <td>{persona.departamento}</td>
      <td>
        <button onClick={() => remover(persona)}>Remover</button>
      </td>
    </tr>
  );
}
interface FilaProps {
  persona: Persona;
  remover: (p: Persona) => void;
}
