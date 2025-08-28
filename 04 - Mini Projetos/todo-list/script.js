const input = document.getElementById("tarefa");
const lista = document.getElementById("lista");
const botao = document.getElementById("adicionar");

botao.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        lista.appendChild(li);
        input.value = "";
    }
});
