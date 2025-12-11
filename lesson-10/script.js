/*  addEventListener() ------------------------------------------------------------------------------------------*/

    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        console.log('Clicked');
    });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* .textContent ------------------------------------------------------------------------------------------*/

    const button = document.querySelector('button');
    const p = document.querySelector('p');

    button.addEventListener('click', () => {
        // console.log('Clicked');
        // p.textContent = 'こんにちは';
        p.textContent = button.textContent  //Ok
    });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* .classList ------------------------------------------------------------------------------------------*/

    const button = document.querySelector('button');
    const p = document.querySelector('p');

    button.addEventListener('click', () => {
        p.classList.add('pink-bg', 'red-border');
        p.classList.remove('green-color');
    });

