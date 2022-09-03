
function copiarPortapapeles(){
    var copiado = document.getElementById('resultado').innerHTML;
    navigator.clipboard.writeText(copiado);
        Swal.fire('Exito!','Copiado con exito','success');
    }
copiar.onclick = copiarPortapapeles;
