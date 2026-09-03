const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if(e.target.matches(".sobre") ||
       e.target.matches(".solapa-derecha") || 
       e.target.matches(".solapa-izquierda") ||
       e.target.matches(".corazon")) {
       envoltura.classList.toggle("abierto");  
       envoltura.classList.add("desactivar-sobre")

       
       if (!carta.classList.contains("abierto")) {
           setTimeout(() => {
              carta.classList.add("mostrar-carta")

              setTimeout(() => {
              carta.classList.remove("mostrar-carta")
              carta.classList.add("abierto");
           }, 500);
        }, 1000);
       }
    } else if (e.target.matches(".envoltura-sobre *")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre")
        if (carta.classList.contains("abierto")) {
             carta.classList.add("cerrando-carta");

             setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierto")
             }, 500)
        }
    }
})