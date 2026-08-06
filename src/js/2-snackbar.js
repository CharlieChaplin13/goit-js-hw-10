import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");

form.addEventListener("submit", handleStart);

function handleStart(event) {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    if (delay < 0) {
        form.reset();
        return; 
    }

    const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{ 
        state === "fulfilled" ? resolve(delay): reject(delay)  
      }, delay)
    });

    promise
        .then((delay) => {
           iziToast.success({
               message: `✅ Fulfilled promise in ${delay}ms`,
               position: "topRight"
            })
        })    
        .catch((delay) => {
            iziToast.error({
               message: `❌ Rejected promise in ${delay}ms`,
               position: "topRight"
            });
        });

    form.reset();
}




