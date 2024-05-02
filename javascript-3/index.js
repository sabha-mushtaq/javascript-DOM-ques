let mytarget1 = document.querySelector('#plusBtn');
let mytarget2 = document.querySelector('#minusBtn');
let mytarget3 = document.querySelector('#mytarget');

let initialValue = 0;

mytarget1.addEventListener('click', function() {
    
    initialValue++;
    mytarget3.innerText = initialValue;
});

mytarget2.addEventListener('click', () => {
    if (initialValue !== 0) {
        initialValue--;
        mytarget3.innerText = initialValue;
    } else {
        alert('Counter is already at 0');
    }
});
