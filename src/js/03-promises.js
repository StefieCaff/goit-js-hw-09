import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);


  const firstDelay = document.getElementsByName("delay")[0];
  const step = document.getElementsByName("step")[0];
  const amount = document.getElementsByName("amount")[0];
  const createBtn = document.querySelector("button");

const testingInput = () => {

  console.log("hi");
 
};

createBtn.addEventListener('click', testingInput());