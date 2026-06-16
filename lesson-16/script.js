// カウンター

let count = 0;

const btnElement = document.querySelector('button');
const pElement = document.querySelector('p');

btnElement.addEventListener('click', () => {
  count++;
  pElement.textContent = count;
});


//






