const timer = document.querySelector('#timer');
const btn = document.querySelector('#btn');

// (1) 終了時刻を求める
// (2) 残り時間を求める
// (3) タイマーの終了

// (1) 終了時刻を求める
btn.addEventListener('click', () => {
    const endTime = new Date().getTime() + 3 * 1000;
});
