import {loadTemplate} from './templateLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let pagesDiv = document.getElementsByClassName('pages');


    let catalogueDiv = document.getElementById('catalogue');

    if (catalogueDiv != null) {
        catalogueDiv.innerHTML += '<h2 class="w-4/5 mx-auto text-4xl font-bold mt-16">Catálogo</h2>';
        await loadDynamicContent();
    }

    let paginationDiv = document.getElementById('pagination');

    if (paginationDiv != null) {
        paginationDiv.appendChild(await loadTemplate('../components/pagination.html'));
    }
}

function loadDynamicContent() {
    return new Promise((resolve, reject) => {
        fetch('../data/categories.json')
            .then(response => response.json())
            .then(data => {
                let dynamicCatalogueSection = document.querySelector('#catalogue');
                if (dynamicCatalogueSection != null) {
                    for (let i = 0; i < data.length && i < 6; i++) {
                        let category = data[i];
                        let article = document.createElement('article');
                        article.innerHTML =
                            `<div class="rounded-xl border border-gray-400">
                                <a href="../pages/category.html" class="text-center">
                                    <img class="rounded-xl w-80 h-80" src=${category.img} alt=${category.name}>
                                    <p class="text-xl font-semibold mt-2 border-t border-gray-400">${category.name}</p>
                                </a>
                            </div>`;
                        dynamicCatalogueSection.appendChild(article);
                    }
                }
                resolve();
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error);
            });
    });
}