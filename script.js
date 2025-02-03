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

    document.getElementById('resultado').innerText = 
        `Se administrará ${dosisPorToma.toFixed(2)} mg cada ${horas} horas (${dosis} dosis)`;

    document.getElementById('resultado').classList.remove('hidden');
}

function toggleConversion() {
    const conversionSection = document.getElementById('conversion');
    const quiereML = document.getElementById('quiereML').checked;

    if (quiereML) {
        conversionSection.classList.remove('hidden');
    } else {
        conversionSection.classList.add('hidden');
    }
}

function convertirML() {
    let mgBase = parseFloat(document.getElementById('mgBase').value);
    let mlBase = parseFloat(document.getElementById('mlBase').value);
    let dosisCalculada = parseFloat(document.getElementById('resultado').innerText.match(/[\d.]+/)[0]);

    if (isNaN(mgBase) || isNaN(mlBase)) {
        alert("Por favor, ingrese los valores de mg y ml según el prospecto.");
        return;
    }

    let resultadoML = (dosisCalculada * mlBase) / mgBase;

    document.getElementById('resultadoML').innerText = 
        `${dosisCalculada} mg equivalen a ${resultadoML.toFixed(2)} ml`;

    document.getElementById('resultadoML').classList.remove('hidden');
}
