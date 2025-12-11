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

/* .classList (2) ------------------------------------------------------------------------------------------*/
    // console.log(p.classList.contains('pink-bg'));  //true false

    const button = document.querySelector('button');
    const p = document.querySelector('p');

    button.addEventListener('click', () => {
        // console.log(p.classList.contains('pink-bg'));  // false
        // if (p.classList.contains('pink-bg') === false) {
        //     p.classList.add('pink-bg');
        // } else {
        //     p.classList.remove('pink-bg');
        // }
        p.classList.toggle('pink-bg');
    });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


