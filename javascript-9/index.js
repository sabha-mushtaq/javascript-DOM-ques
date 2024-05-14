let loginbtn1 = document.querySelector('#btn1');
let loginbtn2 = document.querySelector('#btn2');
let statusbar = document.querySelector('#statusbar');

loginbtn1.addEventListener('click', function () {
    let loginStatus = localStorage.getItem('isLoggedIn'); 
    if (loginStatus) {
        statusbar.textContent = 'You are logged in'; 
    } else {
        localStorage.setItem('isLoggedIn', 'true'); 
        statusbar.textContent = 'You are logged in'; 
    }
});

loginbtn2.addEventListener('click', function () {
    let loginStatus = localStorage.getItem('isLoggedIn'); 
    if (loginStatus) {
        localStorage.removeItem('isLoggedIn'); 
        statusbar.textContent = 'You are logged out'; 
    } 
});
