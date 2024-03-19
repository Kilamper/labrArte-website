function xLuIncludeFile() {
    let elements = document.querySelectorAll('[xlu-include-file]');

    elements.forEach(function (element) {
        let file = element.getAttribute('xlu-include-file');
        let xhttp = new XMLHttpRequest();

        // Agregar una clase de carga al elemento
        element.classList.add('loading');

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                element.innerHTML = xhttp.responseText;
                executeScripts(element); // Ejecutar scripts después de insertar el HTML
                assignEventListeners(); // Asignar eventos después de cargar el contenido

                // Remover la clase de carga para mostrar el contenido
                element.classList.remove('loading');
            }
        };

        xhttp.open("GET", file, true);
        xhttp.send();
    });
}

function executeScripts(container) {
    // Ejecutar scripts dentro del contenedor
    let scripts = container.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src) {
            let script = document.createElement('script');
            script.src = scripts[i].src;
            document.head.appendChild(script);
        } else {
            eval(scripts[i].innerText);
        }
    }
}

function assignEventListeners() {
    let links = document.querySelectorAll('[xlu-include-file] a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            let href = this.getAttribute('href');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    xLuIncludeFile();
});
