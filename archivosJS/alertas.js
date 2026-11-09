const titulo=document.getElementById("titulo");
const seccion1= document.getElementById("seccion1");
const datos=[{id:1,nombre:"manuel",categoria:"deporte"},{id:2,nombre:"balon",categoria:"objetos"}]
export function alerta(a){
    console.log(a);
}
window.onload= function elementos(){
    titulo.innerText="creamos el primer paso"
    titulo.style.textDecoration="line-through";
    for (const element of datos) {
        if(element.categoria==="objetos"){
            console.log(element.nombre);
        }
    }
}