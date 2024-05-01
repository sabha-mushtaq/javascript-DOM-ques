let btn = document.querySelector('button');
let title = document.querySelector('h1');

btn.addEventListener('click', function () {
    let currentColor = document.body.style.backgroundColor;
    let isDarkMode = currentColor === 'black';

    document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
    title.innerText = isDarkMode ? 'THIS MODE IS LIGHT' : 'THIS MODE IS DARK';
    title.style.color = isDarkMode ? 'black' : 'white';
});