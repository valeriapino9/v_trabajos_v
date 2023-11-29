function mostrarRecorrido() {
    var resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "";
    
     // Limpiamos el contenido anterior

    for (var i = 1; i <= 10; i++) {
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "(" + i + ")[";
        for (var j = 1; j <= 10; j++) {
            nuevoParrafo.textContent += j;
            if (j < 10) {
                nuevoParrafo.textContent += ", ";
            }
        }
        nuevoParrafo.textContent += "]";
        resultadoHTML.appendChild(nuevoParrafo);
    }
}