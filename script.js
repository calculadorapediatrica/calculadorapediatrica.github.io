function calcularDosis() {
    let posologia = parseFloat(document.getElementById("posologia").value);  // Convertir a número
    let peso = parseFloat(document.getElementById("peso").value);  // Convertir a número
    let dosisSeleccionada = document.getElementById("dosis").value;
    let dosisMax = parseFloat(document.getElementById("dosisMax").value);  // Convertir a número
    let resultadoDiv = document.getElementById("resultado");

    // Validar si los campos requeridos están completos y son números
    if (isNaN(posologia) || isNaN(peso)) {
        resultadoDiv.innerHTML = "Por favor, ingrese valores válidos para la posología y el peso del paciente.";
        return;
    }

    // Calcular la dosis total
    let dosisTotal = posologia * peso;

    // Si se selecciona "1 dosis o Cada 24 Horas"
    if (dosisSeleccionada == 1) {
        resultadoDiv.innerHTML = "En Mono dosis o el 24 horas.";
        return;
    }

    // Si existe dosis máxima y la dosis total la excede, ajustar la dosis total
    if (!isNaN(dosisMax) && dosisTotal > dosisMax) {
        dosisTotal = dosisMax;
    }

    // Calcular la cantidad por dosis según la selección de frecuencia
    let dosisPorAplicacion = dosisTotal / dosisSeleccionada;

    resultadoDiv.innerHTML = `La dosis total es: ${dosisTotal} mg/día.<br>
                              Dosis por aplicación: ${dosisPorAplicacion} mg.`;
}
