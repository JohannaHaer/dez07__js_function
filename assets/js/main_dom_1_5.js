function showURL() {
    let text = document.querySelector('#inputfield');
    const link = document.URL;
    text.innerHTML = `<p>${link}</p>`;
}