import {loadTemplate} from './templateLoader.js';
import {loadButton} from './buttonLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let productsDiv = document.getElementById('product');

    if (productsDiv != null) {
        productsDiv.appendChild(await loadTemplate('../templates/product-main.html'));
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
