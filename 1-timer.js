import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f}from"./assets/vendor-EyZmBGcZ.js";const n=document.querySelector("button[data-start]"),m=document.querySelector(".timer");n.addEventListener("click",h);let c=!1,a=null;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(s){console.log(s[0]),a=s[0],n.disabled=!1}};f("#datetime-picker",v);y();function h(){if(!c){if(!a){alert("Please choose a date first!");return}c=!0,n.disabled=!0,setInterval(()=>{const s=Date.now(),t=a-s,o=i(t);l(o)},1e3)}}function l(s){m.innerHTML=`
    <div class="timer">
      <div class="field">    
        <span class="value" data-days>${e(s.days)}</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>${e(s.hours)}</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>${e(s.minutes)}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>${s.seconds}</span>
        <span class="label">Seconds</span>
      </div>
    </div>`}function y(){const s=i(0);l(s)}function i(s){const r=Math.floor(s/864e5),d=Math.floor(s%864e5/36e5),u=Math.floor(s%864e5%36e5/6e4),p=Math.floor(s%864e5%36e5%6e4/1e3);return{days:r,hours:d,minutes:u,seconds:p}}function e(s){return String(s).padStart(2,0)}
//# sourceMappingURL=1-timer.js.map
