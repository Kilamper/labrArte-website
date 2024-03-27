import {loadTemplate} from './templateLoader.js';

document.addEventListener('DOMContentLoaded', async function () {
    await loadStructure();
});

async function loadStructure() {
    let coursesDiv = document.getElementById('courses');

    if (coursesDiv != null) {
        coursesDiv.appendChild(await loadTemplate('../templates/courses-main.html'));
    }
}
