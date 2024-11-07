// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];
const buttonValidar = document.getElementById("btnValidarFormulario"); // cambio realizado

// CREANDO MODAL CON BOOTSTRAP 
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
const bodyModal = document.getElementById("idBodyModal");

// Función para validar los campos del formulario
const validarFormulario = function() { // cambio realizado
    let errores = ""; // cambio realizado

    // Validar campos vacíos
    const campos = ["idNombre", "idApellidos", "idFechaNac", "idCorreo", "idPassword", "idPasswordRepetir"];
    campos.forEach(id => { // cambio realizado
        if (document.getElementById(id).value.trim() === "") { // cambio realizado
            errores += `El campo ${id} está vacío.<br>`; // cambio realizado
        } // cambio realizado
    }); // cambio realizado

    // Validar fecha de nacimiento
    const fechaNacimiento = document.getElementById("idFechaNac").value; // cambio realizado
    const fechaActual = new Date().toISOString().split("T")[0]; // cambio realizado
    if (fechaNacimiento > fechaActual) { // cambio realizado
        errores += "La fecha de nacimiento no puede ser futura.<br>"; // cambio realizado
    } // cambio realizado

    // Validar correo electrónico con expresión regular
    const correo = document.getElementById("idCorreo").value; // cambio realizado
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // cambio realizado
    if (!regexCorreo.test(correo)) { // cambio realizado
        errores += "El correo electrónico no es válido.<br>"; // cambio realizado
    } // cambio realizado

    // Validar que las contraseñas coincidan
    const password = document.getElementById("idPassword").value; // cambio realizado
    const repetirPassword = document.getElementById("idPasswordRepetir").value; // cambio realizado
    if (password !== repetirPassword) { // cambio realizado
        errores += "Las contraseñas no coinciden.<br>"; // cambio realizado
    } // cambio realizado

    // Verificar al menos una opción de intereses seleccionada
    const intereses = ["idCkProgramacion", "idCkBD", "idCkRedes", "idCkSeguridad"]; // cambio realizado
    if (!intereses.some(id => document.getElementById(id).checked)) { // cambio realizado
        errores += "Debe seleccionar al menos un interés.<br>"; // cambio realizado
    } // cambio realizado

    // Verificar que una carrera esté seleccionada
    const carreras = ["idRdIng", "idRdLic", "idRdTec", "idRdOtro"]; // cambio realizado
    if (!carreras.some(id => document.getElementById(id).checked)) { // cambio realizado
        errores += "Debe seleccionar una carrera.<br>"; // cambio realizado
    } // cambio realizado

    // Verificar que un país esté seleccionado
    const pais = document.getElementById("idCmPais").value; // cambio realizado
    if (pais === "Seleccione una opcion") { // cambio realizado
        errores += "Debe seleccionar un país de origen.<br>"; // cambio realizado
    } // cambio realizado

    // Mostrar resultados en el modal
    bodyModal.innerHTML = errores || "Todos los datos son válidos."; // cambio realizado
    modal.show(); // cambio realizado
}; // cambio realizado

// Recorrer el formulario
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;
    
    // Recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        // Accediendo a cada hijo del formulario
        let elemento = elementos[index];

        // verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        // verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

        // Contabilizando el total de INPUT TYPE = TEXT 
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        }
        // contabilizando el total de INPUT TYPE = PASSWORD
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        }
        // contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }
        // contabilizando el total de INPUT TYPE = RADIO
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }
        // contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }
        // contabilizando el total de INPUT TYPE = FILE
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }
        // contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }
        // contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    // Funcion que permite mostrar el modal de Bootstrap
    // Esta funcion es definida por Bootstrap
    modal.show();
};

// agregando eventos a los botones
button.onclick = () => {
    recorrerFormulario();
};

buttonValidar.onclick = validarFormulario; // cambio realizado
