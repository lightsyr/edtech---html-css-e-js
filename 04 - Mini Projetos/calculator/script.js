function somar() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");

    if (!isNaN(n1) && !isNaN(n2)) {
        resultado.innerText = "Resultado: " + (n1 + n2);
    } else {
        resultado.innerText = "Digite dois números válidos.";
    }
}
