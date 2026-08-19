const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);

    result.textContent = n;
});
