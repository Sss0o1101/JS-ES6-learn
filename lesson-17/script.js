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
