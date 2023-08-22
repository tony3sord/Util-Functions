const d=document;

export function buscar(buscador,selector) {
    d.addEventListener("keyup",e=>{
       if(e.target.matches(buscador)){
        d.querySelectorAll(selector).forEach(el=>{
            (el.textContent.toLowerCase().includes(e.target.value))
            ?el.classList.remove("filter")
            :el.classList.add("filter");
        })
       }
    })
}

//Clase de CSS filter
// .filter{
//     display: none;
// }
