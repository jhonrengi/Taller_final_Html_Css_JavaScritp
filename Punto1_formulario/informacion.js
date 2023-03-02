


const formulario = document.querySelector("#formulario");

console.log(formulario);

formulario.addEventListener("submit", validarformmulario)

function validarformmulario(e){
    e.preventDefault();
    var nombre = document.getElementById(`campo1`).value;
    var email = document.getElementById(`idemail`).value;
    var asunto = document.getElementById(`Asunto`).value;
    var Mensaje = document.getElementById(`Mensaje`).value;
    console.log("nombre: ", nombre);
    console.log("Correo electronico: ",email);
    console.log("Asunto :",asunto);
    console.log("Mensaje: ", Mensaje);
}






