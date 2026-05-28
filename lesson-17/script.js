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
