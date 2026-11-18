export default function LiteralesDeObjetosMejorado(){

let apellido = "Restrepo";

const paisProp = 'pais';
const paisValor = 'RD';

    let persona = {
        nombre: 'jacobo',
        apellido,
        funcionNormal(){},
        funcionFlecha: () => {},
        [paisProp]: paisValor
    };

    const retornarValorPropiedadPersona = (prop) => persona[prop];

    console.log(retornarValorPropiedadPersona('apellido'));

    console.log(persona)
}