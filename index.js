let number = document.getElementById('number_per')
let number1 = document.getElementById('number_per1')
let number2 = document.getElementById('number_per2')
let number3 = document.getElementById('number_per3')
let number4 = document.getElementById('number_per4')
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
setInterval(() => {
    if (counter == 35) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + '%';
    }

}, 15)
setInterval(() => {
    if (counter1 == 45) {
        clearInterval();
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + '%';
    }

}, 15)
setInterval(() => {
    if (counter2 == 65) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + '%';
    }

}, 15)
setInterval(() => {
    if (counter3 == 20) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + '%';
    }

}, 15)
setInterval(() => {
    if (counter4 == 60) {
        clearInterval();
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + '%';
    }

}, 15)