import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start="start"]'); //start button
const userInput = document.querySelector("input#datetime-picker"); //input field for user/time selection
const fp = flatpickr(userInput, {});  // flatpickr
let timerDate = userInput.value;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  theme: "material_green",
  onClose(selectedDates, dateStr) {
    console.log(selectedDates[0]);
   
    function pastDateAlert() {
      let userDate = selectedDates[0];
      let nowDate = new Date();
        
      if (nowDate > userDate) {
          alert("Please choose a date in the future");
        return false;
      }
      if (nowDate < userDate) {
        enableBtn(startBtn);
        return true;
      }
    };    
    pastDateAlert()
  },
};

 //turns button off
function disableBtn(btnName) {        
    btnName.disabled = true;
};

//turns button on
function enableBtn(btnName) {        
    btnName.disabled = false;
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


flatpickr(calendarInput, options);
startBtn.addEventListener("click", () => {
  convertMs(timerDate);
  console.log(timerDate);
    disableBtn(startBtn); 
});