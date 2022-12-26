let number = document.getElementById('number_per')
let number1 = document.getElementById('number_per1')
let number2 = document.getElementById('number_per2')
let counter = 0;
let counter1 = 0;
let counter2 = 0;
setInterval(() => {
    if (counter == 65) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + '%';
    }

}, 15)
setInterval(() => {
    if (counter1 == 75) {
        clearInterval();
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + '%';
    }

}, 15)
setInterval(() => {
    if (counter2 == 85) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + '%';
    }

}, 15)