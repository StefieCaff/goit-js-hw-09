import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  userInput: document.querySelector("input#datetime-picker"),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const fp = flatpickr(refs.userInput, {}); 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  theme: "material_green",
  onClose(selectedDates) {
    const selectedTime = selectedDates[0];
    const startTime = Date.now();
   
    if (selectedTime < startTime) {
      Notify.failure("Please choose a date in the future.");
      refs.startBtn.disabled = true;
      return;
    };
    
    refs.startBtn.disabled = false;
    let intervalId = null;
    
    refs.startBtn.addEventListener('click', countDown());
    
    function countDown() {
      refs.startBtn.disable = true;
      refs.userInput.disabled = true;

      intervalId = setInterval(() => {
        const currentTime = Date.now();

        if (selectedTime < currentTime) {
          clearInterval(intervalId);
          refs.userInput.disabled = false;
          return;
        }
        
        const timeDifference = selectedTime - currentTime;
        const { days, hours, minutes, seconds } = convertMs(timeDifference);
        console.log(convertMs(timeDifference));

        refs.days.textContent = addLeadingZero(days);
        refs.hours.textContent = addLeadingZero(hours);
        refs.minutes.textContent = addLeadingZero(minutes);
        refs.seconds.textContent = addLeadingZero(seconds);
      }, 1000);
    };
  },
};

flatpickr(refs.userInput, options);

function addLeadingZero(num) {
  if (num < 10) {
    num = num.padStart(2, "0");
    return num;
  } 
  return num;
};



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}