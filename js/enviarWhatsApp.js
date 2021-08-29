function enviarMensaje() {

    let nc = document.querySelector('#nombreCompleto').value;
    let contrato = document.querySelector('#contrato').value;
    let fechaE = document.querySelector('#fechaE').value;
    let retirar = document.querySelector('#retirar').value;
    let renovar = document.querySelector('#renovar').value;
    let boni = document.querySelector('#bonificar').value;
    let fechaB = document.querySelector('#fechaB').value;
    let celular = document.querySelector('#celular').value;

    window.open("https://api.whatsapp.com/send?phone=549" + celular + "&text=Hola%20" + nc + ",%20me%20comunico%20de%20Castellani%20Joyería%20💍,%20para%20informarle%20su%20contrato%20Nro%20" + contrato + ",%20realizado%20el%20" + fechaE + ".%20Sus%20joyas%20corren%20riesgo%20de%20ser%20_rematadas_.%20Puede%20*retirarlas%20por%20$" + retirar + "*.%20Sino%20puede%20renovar%20el%20contrato%20por%20$" + renovar + ".%20y%20no%20perderlas.%20%0D%0DComo%20estamos%20de%20aniversario,%20podemos%20*bonificarle%20un%20mes*%20válido%20para%20la%20renovación%20y%20le%20quedaría%20en%20_$" + boni + "%20hasta%20el%20" + fechaB + "_.%20Por%20favor%20avísenos%20como%20le%20gustaría%20proceder.%20Aguardamos%20su%20respuesta.%20Que%20tenga%20buena%20jornada%20💎");

}
