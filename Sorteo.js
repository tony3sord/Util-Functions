const d=document;

export function sortear(selector,btn) {
    const random = (selector)=>{
        const arr=d.querySelectorAll(selector);
        let sorteo=Math.floor(Math.random()*10);
        const ganador=arr[sorteo];
        return `El ganador es ${ganador.textContent}`;
    }
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            let g=random(selector);
            alert(g);
        }
    })
}
