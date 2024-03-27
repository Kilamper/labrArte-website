export function loadTemplate(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        let template = document.createElement('template');
        template.innerHTML += request.responseText;
        return document.importNode(template.content, true);
    }
}