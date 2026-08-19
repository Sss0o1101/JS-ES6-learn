const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);

    //result.textContent = n;

    switch (n) {
        case 0:
            result.textContent = "大吉";
            break;
        case 1:
            result.textContent = "中吉";
            break;
        case 2:
            result.textContent = "凶";
            break;
    }
});
