const slider = document.querySelector('#slider');
const passwordLength = document.querySelector('#password-length');
const btn = document.querySelector('#btn');

slider.addEventListener('input', () => {
    passwordLength.textContent = slider.value;
});

btn.addEventListener('click', () => {

});
