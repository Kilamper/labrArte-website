import {loadTemplate} from './templateLoader.js';
import {loadButton} from './buttonLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let categoryDiv = document.getElementById('category');

    if (categoryDiv != null) {
        categoryDiv.innerHTML += '<div class="w-full"><h2 id="category-name" class="w-4/5 mx-auto text-4xl font-bold mt-16">Productos</h2></div>';
        await loadDynamicContent();
    }

    let paginationDiv = document.getElementById('pagination');

    if (paginationDiv != null) {
        paginationDiv.appendChild(await loadTemplate('../components/pagination.html'));
    }

    let returnButton = document.getElementById('return-button');

    if (returnButton != null) {
        returnButton.appendChild(await loadButton('../pages/catalogue.html', 'reply', 'Volver'));
    }
}

function loadDynamicContent() {
    return new Promise((resolve, reject) => {
        let urlParams = new URLSearchParams(window.location.search);
        let categoryId = parseInt(urlParams.get('id'));

        fetch('../data/catalogue.json')
            .then(response => response.json())
            .then(data => {
                let dynamicCatalogueSection = document.querySelector('#category');
                if (dynamicCatalogueSection != null) {
                    let category = data.find(category => category.categoryId === categoryId);
                    if (category) {
                        let categoryName = document.getElementById('category-name');
                        categoryName.textContent = category.categoryName;
                        for (let i = 0; i < category.productsList.length && i < 6; i++) {
                            let product = category.productsList[i];
                            let article = document.createElement('article');
                            let url = `../pages/product.html?id=${product.id}`;
                            article.innerHTML =
                                `<div class="rounded-t-xl border-t border-r border-l border-gray-400">
                                <a href=${url} class="text-center">
                                    <img class="rounded-xl w-80 border-b border-gray-400" src=${product.image} alt=${product.name}>
                                    <p class="text-xl font-semibold">${product.name}</p>
                                    <p class="text-xl font-semibold">${product.price}</p>
                                </a>`;
                            let buttonDiv = document.createElement('div');
                            buttonDiv.className = 'flex gap-12 justify-center rounded-b-xl border border-gray-400 py-2';
                            buttonDiv.appendChild(loadButton(url, 'shopping-cart', 'Comprar'));
                            buttonDiv.appendChild(loadButton('', 'message', 'Contactar'));
                            article.appendChild(buttonDiv);
                            article.innerHTML += '</div>';
                            dynamicCatalogueSection.appendChild(article);
                        }
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