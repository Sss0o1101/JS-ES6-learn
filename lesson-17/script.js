//querySelector・・・HTMLから任意のidがついた要素を取得する

// console.log("準備完了");

//------------------------------------------------------------------------------

// カラーコード : #000000

    console.log(document.querySelector('#colorPicker').value);
    document.querySelector('#colorText').textContent = 'カラーコード：';

//------------------------------------------------------------------------------

 console.log(document.querySelector('#colorPicker').value);
    document.querySelector('#colorText').textContent = document.querySelector('#colorPicker').value;

    console.log(document.querySelector('#colorPicker').value);
    document.querySelector('#colorText').textContent = `カラーコード : ${document.querySelector('#colorPicker').value}`;  // カラーコード : #000000

//------------------------------------------------------------------------------

const names = "sss";
    console.log(names);

    //-------------------
    const text = document.querySelector("#colorText");
    const color = document.querySelector("#colorPicker");

    text.textContent =`カラーコード : ${color.value}`;   // カラーコード : #000000

//------------------------------------------------------------------------------

// addEventListener

//何が.addEventListener（どうなったら,どうなる）;
//color.addEventListener(選択されたら,カラーコードを表示する);

const color = document.querySelector('#colorPicker');
color.addEventListener('input', colorBg);

//------------------------------------------------------------------------------

//関数 「カラーコード：」というテキストに続いて、選択した色のカラーコードを表示

const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

const colorBg = () => {
        //カラーコードを表示
        text.textContent = `カラーコード${colors.value}`;
};

//カラーピッカーが変更されたら colorBg を発動させる

color.addEventListener('input', colorBg);

// カラーピッカーが選んだ色を背景に反映させる ------------------------------------------------------------------------------

//  要素.style.プロパティ名 = 値；
//document.body.style.backgroundColor = color.value;    // styleの変更

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker')

//カラーピッカーを操作した時の一連の動作

const colorBg = () => {
        //選択した色を背景色に指定
        document.body.style.backgroundColor = color.value;    // styleの変更
        //カラーコードを表示
        text.textContent = `カラーコード : ${color.value}`;
};

//カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener("input" , colorBg);


//------------------------------------------------------------------------------------------------------------

//条件分岐

const text = document.querySelector('#colorText');
const color =document.querySelector('#colorPicker');

//カラーピッカーを操作した時の一連の動作
const colorBg = () => {
        //選択した色を背景色に指定
        document.body.style.backgroundColor = color.value;
        //カラーコードを表示
        if (color.value === "#ffffff" ) {
            text.textContent = `カラーコード：${color.value} (white)`;
        }
};


//カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener('input', colorBg);


//------------------------------------------------------------------------------------------------------------

//条件分岐 else
const text = document.querySelector('#colorText');
const color =document.querySelector('#colorPicker');

//カラーピッカーを操作した時の一連の動作
 const colorBg = () => {
        //選択した色を背景色に指定
        document.body.style.backgroundColor = color.value;
        //カラーコードを表示
        if (color.value === "#ffffff" ) {
            text.textContent = `カラーコード：${color.value} (white)`;
        } else {
            text.textContent = `カラーコード：${color.value}`;
        }
};


//カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener('input', colorBg);




//------------------------------------------------------------------------------------------------------------

/* 3-11(3) 条件分岐 else if -------------------------------------------------------------*/

    const text = document.querySelector('#colorText');
    const color =document.querySelector('#colorPicker');

    //カラーピッカーを操作した時の一連の動作
    const colorBg = () => {
        //選択した色を背景色に指定
        document.body.style.backgroundColor = color.value;
        //カラーコードを表示
        if (color.value === '#ffffff' ) {
            text.textContent = `カラーコード：${color.value} (white)`;
        } else if (color.value === '#000000') {
            text.textContent = `カラーコード : ${color.value} (black)`;
        } else {
            text.textContent = `カラーコード : ${color.value}`;
        }
    };


//カラーピッカーが変更されたら colorBg を発動させる
 color.addEventListener('input', colorBg);        // 全てコメント化



/* 4-10 チェックでボタンを有効化 ------------------------------------------------------------------------------------------*/

//<input id="btn" disabled> disabledの有無 (classではない)

const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
        //チェックボックスにチェックが入っているなら
        if (isAgreed.checked === true) {
            btn.disabled = false;  //ボタンの無効化を無しにする
        } else {
            btn.disabled = true;   //ボタンを無効化にする
        }
});

//console.log("チェックされました");
// console.log(isAgreed.checked);


/* 4-11 別の書き方(省略) ------------------------------------------------------------------------------------------*/

const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
        if (isAgreed.checked) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
});


/* 4-11 別の書き方(省略) ! ------------------------------------------------------------------------------------------*/

// isAgreedがtrueだから !はfalseになる

const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
        btn.disabled = !isAgreed.checked;
});

//------------------------------------------------------------------------------------------------------------


/* 4-13.14 ページのスクロール量を表示しよう ------------------------------------------------------------------------------------------*/

// scrollY は縦方向のスクロール量
// scrollX は横方向のスクロール量

const getScrollPercent = () => {
        //スクロール量
        const scrolled = window.scrollY;
        console.log(`${scrolled}スクロールされました`);
};

window.addEventListener('scroll', getScrollPercent );


/* 4-15 ページのサイズを取得しよう ------------------------------------------------------------------------------------------*/

// scrollHeight はページの高さ
// scrollWidth はページの幅
// clientHeight は表示域の高さ
// clientWidth は表示域の幅


// const pageHeight = document.documentElement.scrollHeight;  //ページ全体の高さ
// const viewHeight = document.documentElement.clientHeight;  //スクロールバーを含まない部分の高さ


const getScrollPercent = () => {

        const scrolled = window.scrollY;
        console.log(`${scrolled}スクロールされました`);

        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        console.log(`ページの高さ:${pageHeight}、表示領域の高さ${viewHeight}`);
};

window.addEventListener('scroll', getScrollPercent );


/* 4-16 計算式を書いてみよう ------------------------------------------------------------------------------------------*/

// スクロールされた割合
// const percentage = スクロール量 ÷ (ページ全体の高さ - 表示領域の高さ) × 100
// console.log(percentage);

const getScrollPercent = () => {
        const scrolled = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        const percentage = scrolled / (pageHeight - viewHeight) * 100;  //スクロールされた割合

        document.querySelector('#bar').style.width = `${percentage}%`;  //プログレスバーに幅を指定
};

window.addEventListener('scroll', getScrollPercent );


/*  無名関数で書いたもの ------------------------------------------------------------------------------------------*/

window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        const percentage = scrolled / (pageHeight - viewHeight) * 100;  //スクロールされた割合

        document.querySelector('#bar').style.width = `${percentage}%`;  //プログレスバーに幅を指定
});


/* ローディング中画面 (クラスの追加・削除) -------------------------------------------------------------*/

//  要素.classList.add('クラス名')；


const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    //ローディングが終わった時の処理
    loading.classList.add('loaded');
});

// メモ -------------------------------------------------------
要素.classList.add('クラス1', 'クラス2')      //クラスの追加
要素.classList.remove('クラス1', 'クラス2')   //クラスの削除



/* ボタンをクリックしてダークモード () -------------------------------------------------------------*/

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    //クリックされた時の処理
    document.body.classList.toggle('dark-theme');
});


 /* メモ
 add だとクリックされた1回のみ。
 toggleだとbodyの要素を取得する為、追加と削除を交互に行う
 */


/* if,else | ボタンのテキストを変更 ------------------------------------------------------------------------------------------*/

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (btn.textContent === "ダークモードにする") {
            btn.textContent = "ライトモードにする";
        } else {
            btn.textContent = "ダークモードにする";
        }
});


/* 入力した文字数を数えてみよう (length) -------------------------------------------------------------*/

const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
        //キー入力された時の処理
        count.textContent = text.value.length;
});


/* 文字によって表示を変える() ----------------------------------------------------------------*/

const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
        count.textContent = text.value.length;

        if (text.value.length > 5 ) {
            count.classList.add('alert');
        } else {
            count.classList.remove('alert');
        }
});


/* チェックでボタンを有効化 ------------------------------------------------------------------------------------------*/

const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
        //チェックボックスにチェックが入っているなら
        if (isAgreed.checked === true) {
            btn.disabled = false;  //ボタンの無効化を無しにする
        } else {
            btn.disabled = true;   //ボタンを無効化にする
        }
});

/* 別の書き方(省略) ------------------------------------------------------------------------------------------*/

const isAgreed = document.querySelector('#check');
    const btn = document.querySelector('#btn');

    isAgreed.addEventListener('change', () => {
        if (isAgreed.checked) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
});


/* 別の書き方(省略) ! ------------------------------------------------------------------------------------------*/

// isAgreedがtrueだから !はfalseになる

    const isAgreed = document.querySelector('#check');
    const btn = document.querySelector('#btn');

    isAgreed.addEventListener('change', () => {
        btn.disabled = !isAgreed.checked;
});


/* ページのスクロール量を表示しよう ------------------------------------------------------------------------------------------*/

// scrollY は縦方向のスクロール量
// scrollX は横方向のスクロール量

const getScrollPercent = () => {
        //スクロール量
        const scrolled = window.scrollY;
        console.log(`${scrolled}スクロールされました`);
};

window.addEventListener('scroll', getScrollPercent );

/* ページのサイズを取得しよう ------------------------------------------------------------------------------------------*/

// scrollHeight はページの高さ
// scrollWidth はページの幅
// clienHeight は表示域の高さ
// clienWidth は表示域の幅

// const pageHeight = document.documentElement.scrollHeight;  //ページの高さ
// const viewHeight = document.documentElement.clientHeight;  //スクロールバーを含まない部分の高さ


const getScrollPercent = () => {

        const scrolled = window.scrollY;
        console.log(`${scrolled}スクロールされました`);

        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        console.log(`ページの高さ:${pageHeight}、表示領域の高さ${viewHeight}`);
};


window.addEventListener('scroll', getScrollPercent );


/* 計算式を書いてみよう ------------------------------------------------------------------------------------------*/

// スクロールされた割合
// const percentage = スクロール量 ÷ (ページ全体の高さ - 表示領域の高さ) × 100
// console.log(percentage);


const getScrollPercent = () => {
        const scrolled = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        const percentage = scrolled / (pageHeight - viewHeight) * 100;  //スクロールされた割合

        document.querySelector('#bar').style.width = `${percentage}%`;  //プログレスバーに幅を指定
};


window.addEventListener('scroll', getScrollPercent );


/* 無名関数で書いたもの ------------------------------------------------------------------------------------------*/


window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const viewHeight = document.documentElement.clientHeight;
        const percentage = scrolled / (pageHeight - viewHeight) * 100;  //スクロールされた割合

        document.querySelector('#bar').style.width = `${percentage}%`;  //プログレスバーに幅を指定
});


/* -----------------------------------------------------------------------------------------------------------------*/


/* ボタンをクリックしてダークモード () -------------------------------------------------------------*/

const btn = document.querySelector('#btn');

    btn.addEventListener('click', () => {
        //クリックされた時の処理
        document.body.classList.toggle('dark-theme');
});


/* メモ
    add だとクリックされた1回のみ。
    toggleだとbodyの要素を取得する為、追加と削除を交互に行う
*/

/* -----------------------------------------------------------------------------------------------------------------*/


/*　if,else | ボタンのテキストを変更 ------------------------------------------------------------------------------------------*/

const btn = document.querySelector('#btn');

    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme')

        if (btn.textContent === "ダークモードにする") {
            btn.textContent = "ライトモードにする";
        } else {
            btn.textContent = "ダークモードにする";
        }
});


/* 入力した文字数を数えてみよう () -------------------------------------------------------------*/


const text = document.querySelector('#text');
    const count = document.querySelector('#count');

    text.addEventListener('keyup', () => {
        //キー入力された時の処理
        count.textContent = text.value.length;
});


/* 文字によって表示を変える() ----------------------------------------------------------------*/


// // css .alert 使用

const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
        count.textContent = text.value.length;

        if (text.value.length > 5 ) {
            count.classList.add('alert');
        } else {
            count.classList.remove('alert');
        }
});


/*  作成する画像一覧ページの紹介 (insertAdjacentHTML) ------------------------------------------------------------------------------------------*/

//insertAdjacentHTMLの説明
要素.insertAdjacentHTML('挿入位置', 挿入内容);   //'挿入位置'  beforebegin,afterbegin,beforeend,afterend

const menu = document.querySelector('#menu');
const content = `<div><img src="./images/strawberry.jpg" alt=""></div>`;

// menu.textContent = content;   //これだと文字列として表示される
menu.insertAdjacentHTML('beforeend', content);   //これならstrawberry.jpgの画像が表示される


/* 配列で複数の画像ファイル名をまとめよう (配列) ---------------------------------------------------------------------------------*/

const menu = document.querySelector('#menu');
    const lists = [
        'strawberry.jpg',
        'lime.jpg',
        'mango.jpg',
        'lemon.jpg',
        'fig.jpg',
        'apple.jpg',
    ];

console.log(lists);

const content = `<div><img src="./images/strawberry.jpg" alt=""></div>`;
menu.insertAdjacentHTML('beforeend', content);

/* ---------------------------------------------------------------------------------------------------------------------*/


/* 配列の中にある画像を表示しよう (配列) ---------------------------------------------------------------------------------------------------------------*/

const menu = document.querySelector('#menu');

    const lists = [
        'strawberry.jpg',
        'lime.jpg',
        'mango.jpg',
        'lemon.jpg',
        'fig.jpg',
        'apple.jpg',
    ];

    //６個の画像の表示
    const content = `<div><img src="./images/${lists[0]}" alt=""></div>
        <div><img src="./images/${lists[1]}" alt=""></div>
        <div><img src="./images/${lists[2]}" alt=""></div>
        <div><img src="./images/${lists[3]}" alt=""></div>
        <div><img src="./images/${lists[4]}" alt=""></div>
        <div><img src="./images/${lists[5]}" alt=""></div>
    `;

     menu.insertAdjacentHTML('beforeend', content);


/* for文の繰り返し処理を理解しよう (for文) ---------------------------------------------------------------------------------------------------------------*/

for (let i = 1; i <=10; i++) {
        console.log(`${i}回目のこんにちは！`);

}

/* for文で画像を一覧表示しよう (for文) ---------------------------------------------------------------------------------------------------------------*/

const menu = document.querySelector('#menu');

    const lists = [
        'strawberry.jpg',
        'lime.jpg',
        'mango.jpg',
        'lemon.jpg',
        'fig.jpg',
        'apple.jpg',
    ];

    for (let i = 0; i < 6; i++) {
        const content = `<div><img src="./images/${lists[i]}" alt=""></div>`;
        menu.insertAdjacentHTML('beforeend', content);
    }


/*  lengthを使う場合(省略) ------------------------------------------------------*/

   const menu = document.querySelector('#menu');

    const lists = [
        'strawberry.jpg',
        'lime.jpg',
        'mango.jpg',
        'lemon.jpg',
        'fig.jpg',
        'apple.jpg',
    ];

    for (let i = 0; i < lists.length; i++) {
        const content = `<div><img src="./images/${lists[i]}" alt=""></div>`;
        menu.insertAdjacentHTML('beforeend', content);
    }


/*  変数letと定数constの違いとは？ ---------------------------------------------------------------------------------------------------------------*/

    //変数
    let letName = "クラウド"
    letName = "ザックス"
    console.log(letName);  //再代入が出来る


/* オブジェクトで画像、メニュー名、値段をまとめよう ---------------------------------------------------------------------------------------------------------------*/


    const menu = document.querySelector('#menu');

    const strawberry = {
        name: "イチゴ",
        img: "strawberry.jpg",
        price: 450,
    };
    console.log(strawberry); //{name: 'イチゴ', img: 'strawberry.jpg', price: 450}

    const lists = [
        'strawberry.jpg',
        'lime.jpg',
        'mango.jpg',
        'lemon.jpg',
        'fig.jpg',
        'apple.jpg',
    ];

    for (let i = 0; i < lists.length; i++) {
        const content = `<div><img src="./images/${lists[i]}" alt=""></div>`;
        menu.insertAdjacentHTML('beforeend', content);
    }


/* オブジェクトの情報を取得しよう ---------------------------------------------------------------------------------------------------------------*/

    //ドット記法        .name
    //ブランケット記法   ['name']

    const menu = document.querySelector('#menu');

    const strawberry = {
        name: "イチゴ",
        img: "strawberry.jpg",
        price: 450,
    };

    console.log(strawberry); //{name: 'イチゴ', img: 'strawberry.jpg', price: 450}

    console.log(strawberry.name);  //イチゴ
    console.log(strawberry['img']);   //strawberry.jpg
    console.log(strawberry.price); //450

    const lists = [
        'strawberry.jpg',
        'lime.jpg',
        'mango.jpg',
        'lemon.jpg',
        'fig.jpg',
        'apple.jpg',
    ];

    for (let i = 0; i < lists.length; i++) {
        const content = `<div><img src="./images/${lists[i]}" alt=""></div>`;
        menu.insertAdjacentHTML('beforeend', content);
    }


/* 配列とオブジェクトをひとまとめにしよう ---------------------------------------------------------------------------------------------------------------*/

    const menu = document.querySelector('#menu');

    const lists = [
        {
            name: 'イチゴ',
            img: 'strawberry.jpg',
            price: 450,
        },
        {
            name: 'ライム',
            img: 'lime.jpg',
            price: 400,
        },
        {
            name: 'マンゴー',
            img: 'mango.jpg',
            price: 500,
        },
        {
            name: 'レモン',
            img: 'lemon.jpg',
            price: 400,
        },
        {
            name: 'イチジク',
            img: 'fig.jpg',
            price: 500,
        },
        {
            name: 'リンゴ',
            img: 'apple.jpg',
            price: 400,
        },
    ];

    console.log(lists[0].name); //イチゴ

    for (let i = 0; i < lists.length; i++) {
        const content = `<div><img src="./images/${lists[i].img}" alt=""></div>`;
        menu.insertAdjacentHTML('beforeend', content);
    }



/*  配列とオブジェクトをひとまとめにしよう (一覧を表示しよう) ---------------------------------------------------------------------------------------------------------------*/

    const menu = document.querySelector('#menu');

    const lists = [
        {
            name: 'イチゴ',
            img: 'strawberry.jpg',
            price: 450,
        },
        {
            name: 'ライム',
            img: 'lime.jpg',
            price: 400,
        },
        {
            name: 'マンゴー',
            img: 'mango.jpg',
            price: 500,
        },
        {
            name: 'レモン',
            img: 'lemon.jpg',
            price: 400,
        },
        {
            name: 'イチジク',
            img: 'fig.jpg',
            price: 500,
        },
        {
            name: 'リンゴ',
            img: 'apple.jpg',
            price: 400,
        },
    ];

    for (let i = 0; i < lists.length; i++) {
        const content = `<div><img src="./images/${lists[i].img}" alt=""><h2>${lists[i].name}</h2><p>${lists[i].price}円</p></div>`;  //.img をつける
        menu.insertAdjacentHTML('beforeend', content);
    }

    //  .img をつける
    // <h2>${lists[i].name}</h2><p>${lists[i].price}円</p>  によって、nameとpriceを取得


/* 分割代入でコードをスッキリさせよう ---------------------------------------------------------------------------------------------------------------*/

    const menu = document.querySelector('#menu');

    const lists = [
        {
            name: 'イチゴ',
            img: 'strawberry.jpg',
            price: 450,
        },
        {
            name: 'ライム',
            img: 'lime.jpg',
            price: 400,
        },
        {
            name: 'マンゴー',
            img: 'mango.jpg',
            price: 500,
        },
        {
            name: 'レモン',
            img: 'lemon.jpg',
            price: 400,
        },
        {
            name: 'イチジク',
            img: 'fig.jpg',
            price: 500,
        },
        {
            name: 'リンゴ',
            img: 'apple.jpg',
            price: 400,
        },
    ];

    for (let i = 0; i < lists.length; i++) {
        // const name = lists[i].name;
        // const img = lists[i].img;
        // const price = lists[i].price;
        const {name, img, price} = lists[i]

        const content = `<div><img src="./images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;

        menu.insertAdjacentHTML('beforeend', content);
    }


/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* (IntersectionObserver)の仕組み  ------------------------------------------------------------------------------------------*/

    //監視対象が範囲内に現れたら実行する動作
    const showKirin = () => {
        console.log("キリンさんです");
    };

    //監視ロボットの設定
    const kirinObserver = new IntersectionObserver(showKirin);   //関数名を設定、動作内容を指示する

    //kirinを監視するよう指示
    kirinObserver.observe(document.querySelector('#kirin'));


/* 交差状態の情報を見てみよう  ------------------------------------------------------------------------------------------*/

    //監視対象が範囲内に現れたら実行する動作
    const showKirin = (entries) => {
        console.log(entries[0].target);   //[IntersectionObserverEntry]という配列が取得できた。
    };

    //監視ロボットの設定
    const kirinObserver = new IntersectionObserver(showKirin);   //関数名を設定、動作内容を指示する


    //kirinを監視するよう指示
    kirinObserver.observe(document.querySelector('#kirin'));

    // IntersectionObserver オブジェクトプロパティ
    //boundingClientRect //intersectionRect //intersectionRatio
    //isIntersecting //rootBounds //target //time


/* 動きを加えてみよう  ------------------------------------------------------------------------------------------*/

    //監視対象が範囲内に現れたら実行する動作
    const showKirin = (entries) => {
        const keyframes = {
            opacity: [0, 1],
            translate: ['200px 0', 0],
        };

        console.log(entries[0].target.animate(keyframes, 600));
    };

    //監視ロボットの設定
    const kirinObserver = new IntersectionObserver(showKirin);

    //kirinを監視するよう指示
    kirinObserver.observe(document.querySelector('#kirin'));

/* ----------------------------------------------------------------------------------------------------------------------------------------------*/


/* 見出しをしたから浮き上がらせよう (Web Animation API) ------------------------------------------------------------------------------------------*/

    //  (Web Animation API)の書き方
    //  動かす要素.animate(動かす内容, 再生時間);   動かす内容 = キーフレーム

    const heading = document.querySelector('#heading');
    heading.animate(keyframes, 2000);


/* アニメーションの基本の書き方 ------------------------------------------------------------------------------------------*/

    const heading = document.querySelector('#heading');
    const keyframes = {opacity: [0,1],};

    heading.animate(keyframes, 2000);  //2秒かけて文字が表示


/* 複数のアニメーションを加えよう ------------------------------------------------------------------------------------------*/

    const heading = document.querySelector('#heading');

    const keyframes = {
        opacity: [0,1],
        translate: ['0 50px', 0]   //浮かび上がる
    };

    heading.animate(keyframes, 2000);


/* 動きの詳細を加えよう ------------------------------------------------------------------------------------------*/

    //  動かす要素.animate(動かす内容, 動きの詳細)  動きの詳細 = options
