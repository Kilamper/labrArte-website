export function loadButton(url, icon, text) {
    let button = document.createElement('button');
    button.innerHTML =
        `<div class="justify-center"><a href="${url}" class="text-xl font-medium no-underline text-gray-800 hover:text-black buttons">
            <i class="fa-solid fa-${icon} mr-1.5"></i>${text}</a></div>`;
    return button;
}