//time
const time = new Date();
console.log(time);

const time2 = new Date('2026-02-08 10:00:00');
console.log(time2);

const time3 = new Date('2026-02-08T10:00:00');
console.log(time3);

const time4 = new Date('2026-02-08T10:00:00+09:00');
console.log(time4);

const time5 = new Date('2026-02-08T10:00:00+09:00');
console.log(time5);


//gettime
const time6 = new Date();
console.log(time6.getTime());

const time7 = new Date('2026-02-08T10:00:00+09:00');
console.log(time7.getTime());

const time8 = new Date('2026-02-08T10:00:00+09:00');
console.log(time8.getTime());

const time9 = new Date('2026-02-08T10:00:00+09:00');
console.log(time9.getTime());



//setInterval()
const time10 = setInterval(() => {
  console.log('Hello');
}, 1000);

const time11 = setInterval(() => {
  console.log('Hello');
}, 1000);

const time12 = setInterval(() => {
  console.log('Hello');
}, 1000);


//setTimeout()
const time13 = setTimeout(() => {
  console.log('Hello');
}, 1000);

const time14 = setTimeout(() => {
  console.log('Hello');
}, 1000);

const time15 = setTimeout(() => {
  console.log('Hello');
}, 1000);


//clearInterval();
clearInterval(time10);
clearInterval(time11);
clearInterval(time12);


//clearTimeout();
clearTimeout(time13);
clearTimeout(time14);
clearTimeout(time15);



//数値 -----------------------------------------
//Number()

const n = Number(prompt('Number?'));
console.log(n + 5);

// const n2 = Number(prompt('Number?'));
// console.log(n2 + 5);

// const n3 = Number(prompt('Number?'));
// console.log(n3 + 5);
