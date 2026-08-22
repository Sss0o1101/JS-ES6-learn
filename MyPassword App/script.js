const slider = document.querySelector('#slider');
const passwordLength = document.querySelector('#password-length');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

const letters = "abcdefghijklmnopqrstuvwxyz";
const password = "";

slider.addEventListener('input', () => {
    passwordLength.textContent = slider.value;
});

btn.addEventListener('click', () => {
    //result.textContent = letters[Math.floor(Math.random() * 26)];

    for (let i = 0; i < 8; i++) {
        password += letters[Math.floor(Math.random() * 26)];


    }

    result.textContent = password;
});
