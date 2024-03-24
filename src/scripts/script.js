document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
    // Dado que loadStructure es async, ahora puedes asegurarte de que todo ha cargado
    //cargarContenidoDinamico();
});

async function loadStructure() {
    let pagesDiv = document.getElementsByClassName('pages');

    // Cargar header común a todas las páginas
    for (let i = 0; i < pagesDiv.length; i++) {
        pagesDiv[i].appendChild(await loadTemplate('../templates/header.html'));
    }

    let indexDiv = document.getElementById('index');

    if (indexDiv != null) {
        // Cargar estructura estática de index
        indexDiv.appendChild(await loadTemplate('../components/slider.html'));
        indexDiv.appendChild(await loadTemplate('../templates/main.html'));
    }

    let blogDiv = document.getElementById('blog');

    if (blogDiv != null) {
        // Cargar estructura estática de blog
        blogDiv.appendChild(await loadTemplate('../templates/blog-main.html'));
    }

    let coursesDiv = document.getElementById('courses');

    if (coursesDiv != null) {
        // Cargar estructura estática de cursos
        coursesDiv.appendChild(await loadTemplate('../templates/courses-main.html'));
    }

    let productsDiv = document.getElementById('product');

    if (productsDiv != null) {
        // Cargar estructura estática de productos
        productsDiv.appendChild(await loadTemplate('../templates/products-main.html'));
    }

    let catalogueDiv = document.getElementById('catalogue');

    if (catalogueDiv != null) {
        // Cargar estructura estática de catálogo
        catalogueDiv.appendChild(await loadTemplate('../components/categories-list.html'));
    }

    // Cargar footer común a todas las páginas
    for (let i = 0; i < pagesDiv.length; i++) {
        pagesDiv[i].appendChild(await loadTemplate('../templates/footer.html'));
    }
}

async function loadTemplate(url) {
    let response = await fetch(url);
    let text = await response.text();

    let template = document.createElement('template');
    template.innerHTML = text;
    return document.importNode(template.content, true);
}

/*function cargarContenidoDinamico() {
    // Ahora esta función no recibe mainContent, ya que buscará en el DOM actualizado
    fetch('data/content.json')
        .then(response => response.json())
        .then(data => {
            let dynamicContentSection = document.querySelector('#dynamicContent');
            if (!dynamicContentSection) {
                console.error('No se encontró #dynamicContent en el DOM');
                return;
            }
            data.forEach(item => {
                let article = document.createElement('article');
                article.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
                dynamicContentSection.appendChild(article);
            });
        })
        .catch(error => console.error('Error:', error));
}*/
