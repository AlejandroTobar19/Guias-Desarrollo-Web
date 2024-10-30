// Variables globales
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const inputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const tablaPacientes = document.getElementById("idTablaPacientes");

let pacientes = [];

// Función para limpiar el formulario
function limpiarFormulario() {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = "0";
    inputDireccion.value = "";
    inputNombre.focus();
}

// Función para agregar un paciente
function agregarPaciente() {
    const sexo = inputRdMasculino.checked ? "Hombre" : "Mujer";
    const pais = cmbPais.options[cmbPais.selectedIndex].text;

    if (
        inputNombre.value &&
        inputApellido.value &&
        inputFechaNacimiento.value &&
        sexo &&
        pais !== "Seleccione un País" &&
        inputDireccion.value
    ) {
        pacientes.push({
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            fechaNacimiento: inputFechaNacimiento.value,
            sexo,
            pais,
            direccion: inputDireccion.value,
        });

        mostrarPacientes(); // Actualizar tabla de pacientes
        limpiarFormulario(); // Limpiar el formulario
        alert("Paciente agregado correctamente.");
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Función para mostrar los pacientes en la tabla
function mostrarPacientes() {
    let html = `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha Nacimiento</th>
                    <th>Sexo</th>
                    <th>País</th>
                    <th>Dirección</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
    `;

    pacientes.forEach((p, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${p.nombre}</td>
                <td>${p.apellido}</td>
                <td>${p.fechaNacimiento}</td>
                <td>${p.sexo}</td>
                <td>${p.pais}</td>
                <td>${p.direccion}</td>
                <td>
                    <button onclick="editarPaciente(${index})" class="btn btn-primary btn-sm">
                        <i class="bi bi-pencil-square"></i> Editar
                    </button>
                    <button onclick="eliminarPaciente(${index})" class="btn btn-danger btn-sm">
                        <i class="bi bi-trash3-fill"></i> Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    tablaPacientes.innerHTML = html;
}

// Función para eliminar un paciente
function eliminarPaciente(index) {
    pacientes.splice(index, 1); // Eliminar del array
    mostrarPacientes(); // Actualizar la tabla
    alert("Paciente eliminado correctamente.");
}

// Función para editar un paciente
function editarPaciente(index) {
    const paciente = pacientes[index];

    // Cargar los datos del paciente en el formulario
    inputNombre.value = paciente.nombre;
    inputApellido.value = paciente.apellido;
    inputFechaNacimiento.value = paciente.fechaNacimiento;
    if (paciente.sexo === "Hombre") {
        inputRdMasculino.checked = true;
    } else {
        inputRdFemenino.checked = true;
    }
    cmbPais.value = [...cmbPais.options].find(option => option.text === paciente.pais).value;
    inputDireccion.value = paciente.direccion;

    // Eliminar el paciente para evitar duplicados
    eliminarPaciente(index);
}

// Eventos para los botones
document.getElementById("idBtnAgregar").onclick = agregarPaciente;
document.getElementById("idBtnMostrar").onclick = mostrarPacientes;
document.getElementById("idBtnLimpiar").onclick = limpiarFormulario;

// Ejecutar la función de limpieza al cargar la página
limpiarFormulario();
