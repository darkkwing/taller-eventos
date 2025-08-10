let saludar = "Hola!"

function saludo(evento) {
    evento.stopPropagation();
    alert(saludar)  
};

document.getElementById("btnSaludar").addEventListener("click", saludo);

document.getElementById("holaDiv").addEventListener("click", function() {
    alert(saludar + " Soy el div");
});