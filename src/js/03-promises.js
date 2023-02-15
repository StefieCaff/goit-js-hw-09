import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');

//function to create promise and settimeout to mimic api call
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

//function to call first promise then loop through number of times w/ step delay entered into form 

function callPromise(e) {
  e.preventDefault();
  let firstDelay = Number(e.target.delay.value);
  let step = Number(e.target.step.value);
  let amount = Number(e.target.amount.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, firstDelay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    firstDelay += step;
  };
 
};

// event on form submit to call promise loop
form.addEventListener('submit', callPromise);