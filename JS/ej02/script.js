const b1=document.getElementById("b1");
const colores=["red","blue","green","yellow"];
let indice=0;
b1.addEventListener('click', function() {
    setInterval(() => {
        let elemnt=document.getElementById("adios");
        elemnt.style.backgroundColor=colores[indice];
        
        if (indice>=colores.length) {
            indice=0;
        } else {
            indice=indice+1;
        }
    }, 1000);
});