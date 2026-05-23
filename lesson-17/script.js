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
