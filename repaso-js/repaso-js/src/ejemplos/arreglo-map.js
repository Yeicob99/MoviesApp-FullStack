export default function MapEjemplo(){
    // Ejemplo 1: Transformando números

    const numeros = [1,2,3,4,5];
    const cuadrados = numeros.map(valor => valor * valor);
    console.log(cuadrados);

    //Ejemplo 2: Extrayendo un valor de un arreglo de objetos

    const personas = [
        {id: 1, nombre: 'Felipe', pais: "RD"},
        {id: 2, nombre: 'Claudia', pais: "Mexico"},
        {id: 3, nombre: 'Roberto', pais: "Chile"}
    ];
    console.log(personas);

    const ids = personas.map(persona => persona.id );

    const nombres = personas.map(persona => persona.nombre);
    console.log(nombres);

    const nombresYPaises = personas.map(persona => {
        return {
            nombre: persona.nombre,
            pais: persona.pais
        }
    })

    console.log(nombresYPaises)

    // Ejemplo 3: Generando UI

    const elementosDeLista = numeros.map(valor => 
        `<li>${valor}</li>`
    );

    // [1,2,3] => JOIN: 123

    const lista = `
     <ul>
        ${elementosDeLista.join("")}
     </ul>
     `;
     
     return lista;
}
