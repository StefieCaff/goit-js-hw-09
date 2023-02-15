import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);


  const firstDelay = document.getElementsByName("delay")[0];
  const step=document.getElementsByName("step")[0];
  const amount=document.getElementsByName("amount")[0];
  const createBtn=document.querySelector("button");



console.log("world");

createBtn.addEventListener('click', function (e) {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); 



});






for (let i = 0; i <= 20; i += 5) {
  console.log(i);
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
};

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async function loop() {
    for (let i = 0; i < 10; i++) {
        await delay(Math.random() * 1000);
        console.log(i);
    }
})();