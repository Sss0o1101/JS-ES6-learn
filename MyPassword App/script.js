const slider = document.querySelector('#slider');
const passwordLength = document.querySelector('#password-length');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const numbersCheckbox = document.querySelector('#numbers-checkbox');

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
let seed = letters + letters.toUpperCase();


slider.addEventListener('input', () => {
    passwordLength.textContent = slider.value;
});

btn.addEventListener('click', () => {
    //result.textContent = letters[Math.floor(Math.random() * 26)];

    if (numbersCheckbox === true) {

    }

    let password = "";
    for (let i = 0; i < slider.value; i++) {
        //password += letters[Math.floor(Math.random() * 26)];
        password += seed[Math.floor(Math.random() * 52)];     //* seed.length

    }

    result.textContent = password;
});
