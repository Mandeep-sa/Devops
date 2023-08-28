document.addEventListener('DOMContentLoaded', () => {
    const filenameElement = document.getElementById('filename');
    const filetypeElement = document.getElementById('filetype');
    const sizeElement = document.getElementById('size');
    const numCharactersElement = document.getElementById('numCharacters');
    const numWordsElement = document.getElementById('numWords');
    const backButton = document.getElementById('backButton');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    filenameElement.textContent = urlParams.get('filename');
    filetypeElement.textContent = urlParams.get('filetype');
    sizeElement.textContent = urlParams.get('size');
    numCharactersElement.textContent = urlParams.get('numCharacters');
    numWordsElement.textContent = urlParams.get('numWords');

    backButton.addEventListener('click', () => {
        window.location.href = '/';
    });
});
