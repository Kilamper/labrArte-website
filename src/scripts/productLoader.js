import {loadTemplate} from './templateLoader.js';
import {loadButton} from './buttonLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let productsDiv = document.getElementById('product');

    if (productsDiv != null) {
        productsDiv.appendChild(await loadTemplate('../templates/product-main.html'));
        await loadDynamicContent();
    }

    let productButtons = document.getElementById('product-buttons');

    if (productButtons != null) {
        productButtons.appendChild(await loadButton('', 'shopping-cart', 'Comprar'));
        productButtons.appendChild(await loadButton('', 'message', 'Contactar'));
    }

    let returnButton = document.getElementById('return-button');

    if (returnButton != null) {
        returnButton.appendChild(await loadButton('../pages/category.html', 'reply', 'Volver'));
    }
}

function loadDynamicContent() {
    return new Promise((resolve, reject) => {
        let urlParams = new URLSearchParams(window.location.search);
        let productId = parseInt(urlParams.get('id'));

        fetch('../data/products.json')
            .then(response => response.json())
            .then(data => {
                let product = data.find(product => product.id === productId);
                if (product) {
                    let productImage = document.getElementById('product-image');
                    productImage.src = product.image;
                    let productName = document.getElementById('product-name');
                    productName.textContent = product.name;
                    let productPrice = document.getElementById('product-price');
                    productPrice.textContent = product.price;
                    let productDescription = document.getElementById('product-description');
                    productDescription.textContent = "AÑADIR DESCRIPCIÓN AL FICHERO JSON Y CAMBIAR ESTE TEXTO POR product.description";

                }
                resolve();
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error);
            });
    });
}