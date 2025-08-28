let valor = 0;
const display = document.getElementById("valor");

document.getElementById("mais").addEventListener("click", () => {
    valor++;
    display.innerText = valor;
});

document.getElementById("menos").addEventListener("click", () => {
    valor--;
    display.innerText = valor;
});
