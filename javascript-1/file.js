let mytarget = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
btn1.addEventListener('click', function() {
    mytarget.src = 'PWSkillsimg.png';
});

btn2.addEventListener('click', function() {
    mytarget.src = ''; // Clear the image source
    mytarget.alt = 'No profile image'; // Optional: Set alt text
});