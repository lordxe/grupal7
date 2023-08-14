
function Formulario() {
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var msj = document.getElementById('msj').value;
    
    if (name == "") {
        alert("ingrese su nombre");
        return false;
      }
      else if (mail == "") {
        alert("Ingrese su correo electrónico");
        return false;
      }
      else if (msj == "") {
        alert("Ingrese su mensaje");
        return false;
      }
      else {
        alert("Mensaje Enviado");
        return true;
      }    
  }

  //funcion tabla
  $(document).ready(function () {
    $('#tablita').DataTable({
        scrollY: '400px',
        scrollCollapse: true,
        paging: false,
    });
});

