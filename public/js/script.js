// Función para alternar entre los modos oscuro y claro
function toggleDarkMode() {
    var element = document.documentElement;
    var button = document.getElementById("modeButton");
    
    // Alterna entre los modos oscuro y claro cambiando las clases en el elemento HTML y el botón
    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
        element.classList.add("light-mode");
        button.textContent = "Modo Oscuro"; // Cambia el texto del botón
    } else {
        element.classList.remove("light-mode");
        element.classList.add("dark-mode");
        button.textContent = "Modo Claro"; // Cambia el texto del botón
    }
}

const arrow = document.querySelector('.arrow-down');

arrow.addEventListener('click', () => {
    arrow.classList.add('down'); // Agrega la clase para bajar la flecha
    setTimeout(() => {
        arrow.classList.remove('down'); // Elimina la clase después de 1500ms (1.5 segundos)
    }, 1000);
});

