let saludar = "Hola!"

function saludo() {
    alert(saludar)  
};

document.getElementById("holaDiv").addEventListener("click", function() {
    alert(saludar + " Soy el div");
});