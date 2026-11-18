export function  Promesa() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respuesta => respuesta.json())
    .catch(error => console.error(error))
    .then(json => console.log(json));
}

export async function AsyncAwait (){ 
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');    
        const json = await respuesta.json();
        console.log(json);
    } catch (error){
        console.error("Hubo un error en AsyncAwait");
    }
}