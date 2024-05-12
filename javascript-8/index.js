function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let hoursElement = document.querySelector('.box1');
    let minutesElement = document.querySelector('.box2');
    let secondsElement = document.querySelector('.box3');

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    hoursElement.style.fontSize = '50px';
    minutesElement.style.fontSize = '50px';
    secondsElement.style.fontSize = '50px';
    hoursElement.style.margin = '20px 0px 10px 5px';
    minutesElement.style.margin = '20px 0px 10px 5px';
    secondsElement.style.margin = '20px 0px 10px 5px';

    changecolor(hours, minutes, seconds);
}

function changecolor(hours, minutes, seconds) {
    let colorCode = '#' + hours + minutes + seconds;
    document.body.style.backgroundColor = colorCode;
}

updateTime();
setInterval(updateTime, 1000);

