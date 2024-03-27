import {loadTemplate} from './templateLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let headerDiv = document.getElementById('header');

    if (headerDiv != null) {
        headerDiv.appendChild(await loadTemplate('../templates/header.html'));
    }

    let footerDiv = document.getElementById('footer');

    if (footerDiv != null) {
        footerDiv.appendChild(await loadTemplate('../templates/footer.html'));
    }
}