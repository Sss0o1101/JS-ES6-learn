const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
    //result.textContent = n;
    const result = ["大吉", "中吉", "凶"];
    const n = Math.floor(Math.random() * 3);
    result.textContent = result[n];

});



// btn.addEventListener('click', () => {
//     const n = Math.floor(Math.random() * 3);
//     const results = ["大吉", "中吉", "凶"];
//     result.textContent = results[n];
// });


// switch (n) {
//         case 0:
//             result.textContent = "大吉";
//             break;
//         case 1:
//             result.textContent = "中吉";
//             break;
//         case 2:
//             result.textContent = "凶";
//             break;
//     }

// if (n === 0) {
//     result.textContent = "大吉";
// } else if (n === 1) {
//     result.textContent = "中吉";
// } else if (n === 2) {
//     result.textContent = "凶";
// }
