/*
ルール  ------------------------------------------------------------------------------------------------------------------------------------------------------
*/

//alert('hello world');

//console.log('test');

    const foo = 1 + 1;
    console.log(foo);

    const bar = 2 * 2;
    console.log(bar);

    const baz = 3 / 3;
    console.log(baz);

    const qux = 4 - 4;
    console.log(qux);

    const quux = 5 % 5;
    console.log(quux);

    const quuux = 6 ** 6;
    console.log(quuux);

// foo, bar, test, x, foobar, hoge, fuga, piyo



/*
演算  ------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// +
// -
// *
// /
// %
// **


/*
変数  ------------------------------------------------------------------------------------------------------------------------------------------------------
*/

    const x = 10;
    console.log(x); // 10

    let y = 20;
    y = 30;
    console.log(y); // 30



/*
データ型 ------------------------------------------------------------------------------------------------------------------------------------------------------
*/

    console.log(typeof x);             // number
    console.log(typeof 'Hello World'); // string
    console.log(typeof 10);            // number
    console.log(typeof true);          // boolean
    console.log(typeof null);          // object
    console.log(typeof undefined);     // undefined
    console.log(typeof NaN);           // number
    console.log(typeof Infinity);      // number
    console.log(typeof -Infinity);     // number
    console.log(typeof 0);             // number
    console.log(typeof 1);             // number
    console.log(typeof 2);             // number


/*
配列 ------------------------------------------------------------------------------------------------------------------------------------------------------
*/

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(array);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        console.log(array[0]); // 1
        console.log(array[1]); // 2
        console.log(array[2]); // 3
        console.log(array[3]); // 4
        console.log(array[4]); // 5
        console.log(array[5]); // 6
        console.log(array[6]); // 7
        console.log(array[7]); // 8
        console.log(array[8]); // 9
        console.log(array[9]); // 10



/*
ループ文 ------------------------------------------------------------------------------------------------------------------------------------------------------
*/

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }

    // --------------------------------------------------------------

    const questions = [
        '現在の日本の総理利大臣の名前は？',
        '令和7年は西暦で言うと何年？',
        '最も人口が多い国はどこ？'
    ];

    for (let index = 0; index < questions.length; index++) {
        console.log(questions[index]);  // 現在の日本の総理利大臣の名前は？ 令和7年は西暦で言うと何年？ 最も人口が多い国はどこ？
    }

    // 同じ
    console.log(questions[0]);  // 現在の日本の総理利大臣の名前は？
    console.log(questions[1]);  // 令和7年は西暦で言うと何年？
    console.log(questions[2]);  // 最も人口が多い国はどこ？


// forEach -------------------------------------------------------

const questions2 = [
    '現在のアメリカの大統領の名前は？',
    '令和8年は西暦で言うと何年？',
    '最も人口が多い都市はどこ？'
];

questions2.forEach((question) => {
    console.log(question); // 現在のアメリカの大統領の名前は？ 令和8年は西暦で言うと何年？ 最も人口が多い都市はどこ？
});




/*
条件文 ------------------------------------------------------------------------------------------------------------------------------------------------------
*/

let isLogin = false;

if (isLogin === false) {
    console.log('ログインしてください');
} else {
    console.log('ログインしました');
}


const userType = 'member';  // member, admin, owner, guest

if (userType === 'member') {
    console.log('アクセスできません');
} else if (userType === 'admin') {
    console.log('今から10分だけアクセスできます');
} else {
    console.log('アクセス成功');
}

// --------------------------------------------------------------

myMoney = 1000;

let isShoping = false;

if (myMoney >= 500) {
    isShoping = !isShoping;
} else {
    console.log(isShoping);
}

// myMoney = 1000;

// let isShoping = false;

// if (myMoney >= 500) {
//     isShoping = true;
// } else {
//     console.log(isShoping);
// }



/*
関数 ------------------------------------------------------------------------------------------------------------------------------------------------------
*/

function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3

const add = (a, b) => {
    return a + b;
}
console.log(add(1, 2)); // 3


// 例  --------------------------------------------------------------------

if (new Date().getHours() > 12) {
    document.body.style.backgroundColor = '#000';
}

// 関数化
function changeDarkMode () {
    if (new Date().getHours() > 12) {
        document.body.style.backgroundColor = '#000';
    }
}

changeDarkMode(); 
