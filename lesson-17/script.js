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
