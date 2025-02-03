function calcularDosis() {
    let posologia = document.getElementById("posologia").value;
    let peso = document.getElementById("peso").value;
    let dosisSeleccionada = document.getElementById("dosis").value;
    let dosisMax = document.getElementById("dosisMax").value;
    let resultadoDiv = document.getElementById("resultado");

    // Validar si los campos requeridos están completos
    if (posologia === "" || peso === "") {
        resultadoDiv.innerHTML = "Por favor, ingrese la posología y el peso del paciente.";
        return;
    }

    // Calcular la dosis total
    let dosisTotal = posologia * peso;

    // Si se selecciona "1 dosis o Cada 24 Horas"
    if (dosisSeleccionada == 1) {
        resultadoDiv.innerHTML = "En Mono dosis o el 24 horas.";
        return;
    }

    // Si existe dosis máxima, verificar que no la exceda
    if (dosisMax !== "" && dosisTotal > dosisMax) {
        dosisTotal = dosisMax;
    }

    // Calcular la cantidad por dosis según la selección de frecuencia
    let dosisPorAplicacion = dosisTotal / dosisSeleccionada;

    resultadoDiv.innerHTML = `La dosis total es: ${dosisTotal} mg/día.<br>
                              Dosis por aplicación: ${dosisPorAplicacion} mg.`;
}
