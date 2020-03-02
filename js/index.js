document.querySelector('#timeStamp').innerText = new Date().toLocaleTimeString();
document.querySelector('#get-ajax-html').addEventListener('click', getHtml);
function getHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('#get-html').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}
document.querySelector('#fetch-html').addEventListener('click', fetchHtml);
function fetchHtml() {
    fetch('client-data.html')
        .then(response => response.text())
        .then(html => document.querySelector('#get-html').innerHTML = html);
}

document.querySelector('#get-ajax-json').addEventListener('click', getAjaxJson);
function getAjaxJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.querySelector('#client-name').innerHTML = data.name;
            document.querySelector('#client-age').innerHTML = data.age;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}
document.querySelector('#fetch-json').addEventListener('click', fetchJson);
function fetchJson() {
    fetch('client-data.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#client-name').innerHTML = data.name;
            document.querySelector('#client-age').innerHTML = data.age;
        })
}