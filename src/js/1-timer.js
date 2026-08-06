// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// const flatpickr = require("flatpickr");

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("button[data-start]");
const userInput = document.querySelector("#datetime-picker");

const daysSpan = document.querySelector("span[data-days]");
const hoursSpan = document.querySelector("span[data-hours]");
const minutesSpan = document.querySelector("span[data-minutes]");
const secondsSpan = document.querySelector("span[data-seconds]");

startBtn.disabled = true;

// const clockface = document.querySelector(".timer");

startBtn.addEventListener("click", start);

let isActive = false;
let IntervalId = null;
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
     let now = new Date();

     if(userSelectedDate.getTime() < now.getTime()) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
        position: "topRight",
      });
      startBtn.disabled = true;
     } else {startBtn.disabled = false;}
  }

};

flatpickr("#datetime-picker", options);


// init();

function start() {
  // let userSelectedDate = null; 

  if(isActive) {
    return;
  }

  if (!userSelectedDate) {
    alert("Please choose a date first!");
    return;
  }

  isActive = true;
  startBtn.disabled = true;
  userInput.disabled = true; 
   userInput.style.pointerEvents = 'none';

  const endTime = userSelectedDate.getTime();

  IntervalId = setInterval(() => {
    const currentTime = Date.now();
    const ms = endTime - currentTime;

    if (ms <= 0) {
      clearInterval(IntervalId);
      isActive = false;
      userInput.disabled = false;
      userInput.style.pointerEvents = 'auto';

      updateInterface(0, 0, 0, 0); 
      iziToast.success({
        title: "Success",
        message: "Time is up!",
        position: "topRight",
      });
      return;
      }

      const time = convertMs(ms);
      updateInterface(time.days, time.hours, time.minutes, time.seconds);

    // onTick(time);

  }, 1000)
}

function updateInterface(days, hours, minutes, seconds) {
  daysSpan.textContent = pad(days);
  hoursSpan.textContent = pad(hours);
  minutesSpan.textContent = pad(minutes);
  secondsSpan.textContent = pad(seconds);
}


// function init() {
//   const time = convertMs(0);
//   onTick(time);
// }
// Для підрахунку значень використовуй готову функцію convertMs, 
// де ms — різниця між кінцевою і поточною датою в мілісекундах.

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

function pad(value) {
  return String(value).padStart(2, "0");
}