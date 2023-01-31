import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start="start"]'); //start button
const calendarInput = document.querySelector("input#datetime-picker"); //input field for calendar/time selection
const fp = flatpickr(calendarInput, {});  // flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  theme: "material_green",
  onClose(selectedDates) {
      console.log(selectedDates[0]);
   
    function pastDateAlert() {
      var userDate = selectedDates[0];
        var nowDate = new Date();
        
      if (nowDate > userDate) {
          alert("Please choose a date in the future");
        return false;
      }
      if (nowDate < userDate) {
        startBtn.disabled = false;
        return true;
      }
    };
      
    pastDateAlert()
  },
};

 //turns start button off
function disableBtn() {        
    startBtn.disabled = true;
};

//turns start button on
function enableBtn() {        
    startBtn.disabled = false;
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
// startBtn.addEventListener("click", () => {
//     convertMs(selectedDate);
//     disableBtn(); 
// });