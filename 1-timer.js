import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p}from"./assets/vendor-EyZmBGcZ.js";const s=document.querySelector("button[data-start]"),m=document.querySelector(".timer");s.addEventListener("click",h);let c=!1,a=null;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),a=e[0];let t=new Date;if(a.getTime()<t.getTime()){window.alert("Please choose a date in the future");return}else s.disabled=!1;return s.disabled}};p("#datetime-picker",v);y();function h(){if(!c){if(!a){alert("Please choose a date first!");return}c=!0,s.disabled=!0,setInterval(()=>{const e=Date.now(),n=a-e,t=i(n);l(t)},1e3)}}function l(e){m.innerHTML=`
    <div class="timer">
      <div class="field">    
        <span class="value" data-days>${o(e.days)}</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>${o(e.hours)}</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>${o(e.minutes)}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>${e.seconds}</span>
        <span class="label">Seconds</span>
      </div>
    </div>`}function y(){const e=i(0);l(e)}function i(e){const r=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:d,minutes:u,seconds:f}}function o(e){return String(e).padStart(2,0)}
//# sourceMappingURL=1-timer.js.map
