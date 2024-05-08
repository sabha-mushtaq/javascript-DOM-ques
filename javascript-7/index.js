
let inputbox = document.querySelector('input');
let listItems = document.querySelectorAll('li');

inputbox.addEventListener('input', function () {
    let myValue = inputbox.value.toLowerCase();
    listItems.forEach(item => {
        let itemText = item.textContent.toLowerCase();
        if (itemText.includes(myValue)) {
            item.classList.remove('remove');
            item.classList.add('add');
        } else {
            item.classList.remove('add');
            item.classList.add('remove');
        }
    });
});
