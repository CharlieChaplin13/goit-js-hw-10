// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// const flatpickr = require("flatpickr");

const startBtn = document.querySelector("button[data-start]");
const clockface = document.querySelector(".timer");

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
    console.log(selectedDates[0]);
    const selectedDate = selectedDates[0];
    userSelectedDate = selectedDate;
     startBtn.disabled = false; 
  }

};

flatpickr("#datetime-picker", options);


init();

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
  

  IntervalId = setInterval(() => {
    const currentTime = Date.now();
    const ms = userSelectedDate - currentTime;
    const time = convertMs(ms);

    onTick(time);
  }, 1000)
}

function onTick(time) {
  clockface.innerHTML = `
    <div class="timer">
      <div class="field">    
        <span class="value" data-days>${pad(time.days)}</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>${pad(time.hours)}</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>${pad(time.minutes)}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>${(time.seconds)}</span>
        <span class="label">Seconds</span>
      </div>
    </div>`          
}

function init() {
  const time = convertMs(0);
  onTick(time);
}
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
  return String(value).padStart(2, 0);
}

