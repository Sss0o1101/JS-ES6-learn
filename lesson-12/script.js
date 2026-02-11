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
