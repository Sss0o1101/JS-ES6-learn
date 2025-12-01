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


/*  .querySelectorAll() ------------------------------------------------------------------------------------------*/
    //querySelectorAllは配列である。

    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        // document.querySelectorAll('li')[0].textContent = 'Changed!'
        document.querySelectorAll('li').forEach( (li) => {
            li.textContent = 'Changed!'
        });
    });

/*  querySelectorAll() (2) ------------------------------------------------------------------------------------------*/

    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        document.querySelector('#second').textContent = 'Changed!!!!!'
        // document.querySelectorAll('li')[1].textContent = 'Changed!!!!!'
        document.querySelectorAll('.target').forEach( (li) => {
            li.textContent = 'Changed!!!'
        });
    });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/*  document.createElement() / appendChild() / insertBefore() ------------------------------------------------------------------------------------------*/

    //document.createElement('');
    //insertBefore()  //親Node.insertBefore(追加Node, 参照Node)
    //親Node.appendChild(追加Node)

    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        const liElement = document.createElement('li');
        liElement.textContent = 'Hanako'

        // document.querySelector('ul').appendChild(liElement);  //ulの一番下の子要素に'Hanako'を追加
        // document.querySelector('ul').insertBefore(liElement, document.querySelector('#second'));  ////ulのJiroの上に'Hanako'を追加

        if (confirm('Sure?') === true) {
            document.querySelector('#second').remove()
        }
    });

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/
