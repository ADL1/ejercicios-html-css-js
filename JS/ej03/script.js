const b1=document.getElementById("b1");

b1.addEventListener('click', function() {
    setInterval(() => {
        let elemnt=document.getElementById("adios");
        let fecha=new Date();
        let horas= fecha.getHours().toString();
        let minutos=fecha.getMinutes().toString();
        let segundos=fecha.getSeconds().toString();
        let horaCompleta=`${horas}:${minutos}:${segundos}`;
        elemnt.innerText=horaCompleta

    }, 1000);
});