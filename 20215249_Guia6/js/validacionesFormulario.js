function validarFormulario() {
    const carnet = document.getElementById("carnet").value;
    const nombre = document.getElementById("nombre").value;
    const dui = document.getElementById("dui").value;
    const nit = document.getElementById("nit").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;

    const carnetRegex = /^[A-Z]{2}\d{3}$/;
    const nombreRegex = /^[A-Za-z\s]+$/;
    const duiRegex = /^\d{8}-\d$/;
    const nitRegex = /^\d{4}-\d{6}-\d{3}-\d$/;
    const edadRegex = /^\d+$/;

    if (!carnetRegex.test(carnet)) {
        alert("El carnet debe tener el formato de dos letras seguidas de tres números (Ejemplo: AB001).");
        return false;
    }
    if (!nombreRegex.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return false;
    }
    if (!duiRegex.test(dui)) {
        alert("El DUI debe tener el formato ########-#.");
        return false;
    }
    if (!nitRegex.test(nit)) {
        alert("El NIT debe tener el formato ####-######-###-#.");
        return false;
    }
    if (!edadRegex.test(edad) || edad <= 0) {
        alert("La edad debe ser un número positivo.");
        return false;
    }

    alert("Formulario válido. Datos enviados correctamente.");
    return true;
}
