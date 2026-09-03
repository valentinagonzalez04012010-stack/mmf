const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
   if(e.target.matches(".sobre") ||
       e.target.matches(".solapa-derecha") || 
       e.target.matches(".solapa-izquierda") ||
       e.target.matches(".corazon")) {
       envoltura.classList.toggle("abierto");  

   } else if (e.target.matches(".sobre *")) {
      if(!carta.classList.contains("abierto")){
         carta.classList.add("mostrar-carta");

         setTimeout(() => {
            carta.classList.remove("mostrar-carta");
            carta.classList.add("abierto");
         }, 500);
         envoltura.classList.add("desactivar-sobre")
      } else  {
        carta.classList.add("cerrando-carta");
        carta.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre");

         setTimeout(() => {
            carta.classList.remove("cerrando-carta")
            carta.classList.remove("abierto")
         }, 500 );
      }
   } 
   
})