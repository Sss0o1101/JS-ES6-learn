const slider = document.querySelector('#slider');
const passwordLength = document.querySelector('#password-length');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const letters = "abcdefghijklmnopqrstuvwxyz";

slider.addEventListener('input', () => {
    passwordLength.textContent = slider.value;
});

btn.addEventListener('click', () => {
    result.textContent = letters[Math.floor(Math.random() * 26)];
});
