document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
    // Dado que loadStructure es async, ahora puedes asegurarte de que todo ha cargado
    cargarContenidoDinamico();
});

async function loadStructure() {
    let pagesDiv = document.getElementsByClassName('pages');

    // Load header common to all pages
    for (let i = 0; i < pagesDiv.length; i++) {
        pagesDiv[i].appendChild(await loadTemplate('../templates/header.html'));
    }

    let indexDiv = document.getElementById('index');

    if (indexDiv != null) {
        // Load static structure of index
        indexDiv.appendChild(await loadTemplate('../components/slider.html'));
        indexDiv.appendChild(await loadTemplate('../templates/main.html'));
    }

    let blogDiv = document.getElementById('blog');

    if (blogDiv != null) {
        // Load static structure of blog
        blogDiv.appendChild(await loadTemplate('../templates/blog-main.html'));
    }

    let coursesDiv = document.getElementById('courses');

    if (coursesDiv != null) {
        // Load static structure of courses
        coursesDiv.appendChild(await loadTemplate('../templates/courses-main.html'));
    }

    let productsDiv = document.getElementById('product');

    if (productsDiv != null) {
        // Load static structure of products
        productsDiv.appendChild(await loadTemplate('../templates/products-main.html'));
    }

    let catalogueDiv = document.getElementById('catalogue');

    if (catalogueDiv != null) {
        // Load static structure of catalogue
        let categoriesList = await loadTemplate('../components/categories-list.html');
        catalogueDiv.appendChild(categoriesList);
    }

    // Load footer common to all pages
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

function cargarContenidoDinamico() {
    // Fetch the JSON data
    fetch('src/data/content.json')
        .then(response => response.json())
        .then(data => {
            // Get the catalogue object
            let catalogue = data.data['api::catalogue.catalogue'];
            let files = data.data['plugin::upload.file'];

            // Get the element container
            let elementContainer = document.getElementById('element-container');

            // Iterate over the catalogue object
            for (let key in catalogue) {
                let item = catalogue[key];

                // Create a new category element
                let categoryElement = document.createElement('a');
                categoryElement.href = "../pages/category.html";
                categoryElement.className = "contents no-underline text-center text-black";

                // Create the image div
                let imageDiv = document.createElement('div');
                imageDiv.className = "w-80 h-80 flex items-end bg-cover justify-center bg-center element-image";
                imageDiv.style.backgroundImage = `url(${files[item.image[0]].url})`;

                // Create the category name paragraph
                let categoryName = document.createElement('p');
                categoryName.className = "text-xl font-semibold";
                categoryName.textContent = item.category;

                // Append the image div and category name to the category element
                categoryElement.appendChild(imageDiv);
                categoryElement.appendChild(categoryName);

                // Append the category element to the element container
                elementContainer.appendChild(categoryElement);
            }
        })
        .catch(error => console.error('Error:', error));
}
