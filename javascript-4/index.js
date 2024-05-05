let mytarget = document.getElementsByTagName('body')[0]; 
let heading = document.createElement('h1');
heading.textContent = 'SIGN UP FORM'; 
let myfirstelement = mytarget.appendChild(heading); 
myfirstelement.style.display = 'flex'; 
myfirstelement.style.justifyContent = 'center'; 
myfirstelement.style.marginTop = '100px';

let body = document.createElement('div');
body.style.height = '500px';
body.style.width = '500px';
body.style.border = 'solid 4px';
body.style.margin = 'auto';
mytarget.appendChild(body);

let myform = document.createElement('form');
body.appendChild(myform);

let label = document.createElement('label');
label.textContent = 'Name:';
myform.appendChild(label);

let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'username');
input.setAttribute('placeholder', 'Enter username (Minimum 3 characters)');
input.style.margin = '50px 0px 5px 5px';
input.style.height = '40px';
input.style.width = '350px';
myform.appendChild(input);

label.style.marginLeft = '30px';
label.style.fontSize = '25px';

let label2 = document.createElement('label');
label2.textContent = 'Email:';
myform.appendChild(label2);

let input1 = document.createElement('input');
input1.setAttribute('type', 'email');
input1.setAttribute('name', 'email');
input1.setAttribute('placeholder', 'Enter your email');
input1.style.margin = '50px 0px 5px 5px';
input1.style.height = '40px';
input1.style.width = '350px';
myform.appendChild(input1);

label2.style.marginLeft = '30px';
label2.style.fontSize = '25px';

let label3 = document.createElement('label');
label3.textContent = 'Password:';
myform.appendChild(label3);

let input2 = document.createElement('input');
input2.setAttribute('type', 'password');
input2.setAttribute('name', 'password');
input2.setAttribute('placeholder', 'Enter password (Minimum 8 characters)');
input2.style.margin = '50px 0px 5px 5px';
input2.style.height = '40px';
input2.style.width = '350px';
myform.appendChild(input2);

label3.style.marginLeft = '30px';
label3.style.fontSize = '25px';

let btn = document.createElement('button');
btn.innerText = 'Submit';
btn.style.height = '50px';
btn.style.width = '100px';
btn.style.marginTop = '80px';
btn.style.marginLeft = '100px';
myform.appendChild(btn);

btn.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (input.value.trim().length >= 3 && input2.value.trim().length >= 8) {
        alert('Form validation successful');
    } else {
        alert('Form validation failed');
    }
});



