import {loadTemplate} from './templateLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let blogDiv = document.getElementById('blog');

    if (blogDiv != null) {
        blogDiv.appendChild(await loadTemplate('../templates/blog-main.html'));
    }
}
