import { useState } from "react";
import TablaMemoizar from "./TablaMemoizar";

export default function EjemploMemoizar() {
  const [texto, setTexto] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <p>El texto es: {texto}</p>

      <TablaMemoizar />
    </>
  );
}
