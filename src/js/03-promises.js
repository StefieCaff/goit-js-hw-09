import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

refs = {
  firstDelay: document.getElementsByName("delay")[0],
  step: document.getElementsByName("step")[0],
  amount: document.getElementsByName("amount")[0],
  createBtn: document.querySelector("button"),
};

console.log(refs.firstDelay.value);
console.log(refs.step.value);
console.log(refs.amount.value);

function createPromise() {
  console.log(refs.firstDelay.value);
  console.log(refs.step.value);
  console.log(refs.amount.value);
};

refs.createBtn.addEventListener('click', createPromise());