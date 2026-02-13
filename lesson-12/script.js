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

const n2 = Number(prompt('Number?'));
console.log(n2 + 5);

const n3 = Number(prompt('Number?'));
console.log(n3 + 5);

//parseInt()

const n4 = parseInt(prompt('Number?'));
console.log(n4 + 5);

const n5 = parseInt(prompt('Number?'));
console.log(n5 + 5);

const n6 = parseInt(prompt('Number?'));
console.log(n6 + 5);

//Math.ceil()

const n7 = Math.ceil(prompt('Number?'));
console.log(n7 + 5);

const n8 = Math.ceil(prompt('Number?'));
console.log(n8 + 5);

const n9 = Math.ceil(prompt('Number?'));
console.log(n9 + 5);

//Math.floor()

const n10 = Math.floor(prompt('Number?'));
console.log(n10 + 5);

const n11 = Math.floor(prompt('Number?'));
console.log(n11 + 5);

const n12 = Math.floor(prompt('Number?'));
console.log(n12 + 5);

//Math.round()

const n13 = Math.round(prompt('Number?'));
console.log(n13 + 5);

const n14 = Math.round(prompt('Number?'));
console.log(n14 + 5);

const n15 = Math.round(prompt('Number?'));
console.log(n15 + 5);

//Math.abs()

const n16 = Math.abs(prompt('Number?'));
console.log(n16 + 5);

const n17 = Math.abs(prompt('Number?'));
console.log(n17 + 5);

const n18 = Math.abs(prompt('Number?'));
console.log(n18 + 5);

//Math.max()
