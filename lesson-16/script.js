// カウンター

let count = 0;

const btnElement = document.querySelector('button');
const pElement = document.querySelector('p');

btnElement.addEventListener('click', () => {
  count++;
  pElement.textContent = count;
});


// カウンター２
const btnElement2 = document.querySelector('button');
const pElement2 = document.querySelector('p');

btnElement2.addEventListener('click', () => {
  count = 0;
  pElement2.textContent = count;
});
