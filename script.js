let dosisPorToma = 0; // Variable global para dosis por toma

function calcularDosis() {
    let posologia = parseFloat(document.getElementById('posologia').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let dosis = parseInt(document.getElementById('dosis').value);
    let dosisMax = parseFloat(document.getElementById('dosisMax').value); // No es obligatorio

    if (isNaN(posologia) || isNaN(peso) || isNaN(dosis)) {
        alert("Por favor, ingrese la posología, el peso y la dosis.");
        return;
    }

    let dosisTotalDia = posologia * peso;

    // 📌 Si el usuario ingresó una dosis máxima, la aplicamos
    if (!isNaN(dosisMax) && dosisTotalDia > dosisMax) {
        dosisTotalDia = dosisMax;
    }

    dosisPorToma = dosisTotalDia / dosis; // Asignar la dosis por toma para usar en la conversión a ml
    let horas = 24 / dosis;

    let resultadoTexto = `Se administrará ${dosisPorToma.toFixed(2)} mg cada ${horas} horas (${dosis} dosis)`;

    // Modificar el texto si la opción es "En 1 dosis o 24 horas"
    if (dosis === 1) {
        resultadoTexto = `Se administrará ${dosisPorToma.toFixed(2)} mg en 1 dosis o 24 horas.`;
    }

    document.getElementById('resultado').innerText = resultadoTexto;
    document.getElementById('resultado').classList.remove('hidden');
}

function toggleConversion() {
    let conversionDiv = document.getElementById('conversion');
    let quiereML = document.getElementById('quiereML').checked;

    if (quiereML) {
        conversionDiv.classList.remove('hidden');
    } else {
        conversionDiv.classList.add('hidden');
    }
}

function convertirML() {
    let mgBase = parseFloat(document.getElementById('mgBase').value);
    let mlBase = parseFloat(document.getElementById('mlBase').value);

    if (isNaN(mgBase) || isNaN(mlBase)) {
        alert("Por favor, ingrese la cantidad de mg y ml correctamente.");
        return;
    }

    if (mgBase <= 0 || mlBase <= 0) {
        alert("Los valores deben ser mayores que cero.");
        return;
    }

    let resultadoML = (dosisPorToma * mlBase) / mgBase;
    document.getElementById('resultadoML').innerText = `La dosis en ml es: ${resultadoML.toFixed(2)} ml.`;
    document.getElementById('resultadoML').classList.remove('hidden');
}
