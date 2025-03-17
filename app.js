// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombre");
    const btnAdicionar = document.getElementById("adicionar");
    const btnReiniciar = document.getElementById("reiniciar");
    const btnSortear = document.getElementById("sortear");
    const listaNombres = document.getElementById("lista-nombres");
    const resultado = document.getElementById("resultado");
    
    let nombres = [];

    btnAdicionar.addEventListener("click", () => {
        const nombre = inputNombre.value.trim();
        if (nombre && !nombres.includes(nombre)) {
            nombres.push(nombre);
            actualizarLista();
            inputNombre.value = "";
        }
    });
    
    btnReiniciar.addEventListener("click", () => {
        nombres = [];
        actualizarLista();
        resultado.textContent = "";
    });
    
    btnSortear.addEventListener("click", () => {
        if (nombres.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * nombres.length);
            resultado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`;
        }
    });
    
    function actualizarLista() {
        listaNombres.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });
    }
});
