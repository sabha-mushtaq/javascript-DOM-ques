let label = document.createElement('label');
label.textContent = 'Which is your favourite programming language:';
label.style.fontSize = '30px';
document.body.appendChild(label);

let select = document.createElement('select');
document.body.appendChild(select);

let options = ['Python', 'JavaScript', 'Java', 'C#', 'C', 'Swift'];

options.forEach(optionText => {
   let option = document.createElement('option');
 option.textContent = optionText;
   select.appendChild(option);
});
