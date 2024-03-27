import {loadTemplate} from './templateLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let indexDiv = document.getElementById('index');

    if (indexDiv != null) {
        indexDiv.appendChild(await loadTemplate('../components/slider.html'));
        indexDiv.appendChild(await loadTemplate('../templates/main.html'));
    }
}
