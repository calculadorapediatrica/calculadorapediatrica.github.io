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

    let dosisPorToma = dosisTotalDia / dosis;
    let horas = 24 / dosis;

    let resultadoTexto = `Se administrará ${dosisPorToma.toFixed(2)} mg cada ${horas} horas (${dosis} dosis)`;

    // Modificar el texto si la opción es "En 1 dosis o 24 horas"
    if (dosis === 1) {
        resultadoTexto = `Se administrará ${dosisPorToma.toFixed(2)} mg en 1 dosis o 24 horas.`;
    }

    document.getElementById('resultado').innerText = resultadoTexto;
    document.getElementById('resultado').classList.remove('hidden');
}
