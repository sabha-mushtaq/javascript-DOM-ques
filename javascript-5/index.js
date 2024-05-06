let heading = document.createElement('h1');
document.body.appendChild(heading);
heading.textContent = 'Your image is hidden';

let toggle = document.createElement('button');
document.body.appendChild(toggle);
toggle.style.margin = '50px';
toggle.style.height = '50px';
toggle.style.width = '150px';
toggle.textContent = 'Toggle';

let mydiv = document.createElement('div');
document.body.appendChild(mydiv);
mydiv.style.height = '350px';
mydiv.style.width = '550px';
mydiv.style.border = 'solid 3px black';
mydiv.style.background = 'url("pw.png") no-repeat '; 
mydiv.style.backgroundSize = 'cover';

let isVisible = true;

toggle.addEventListener('click', function() {
    isVisible = !isVisible;

    if (isVisible) {
        mydiv.style.background = 'url("pw.png") no-repeat ';
        mydiv.style.backgroundSize = 'cover' ;
        heading.textContent = 'Your image is visible';
    } else {
        mydiv.style.background = 'none'; 
        heading.textContent = 'Your image is hidden';
    }
});


