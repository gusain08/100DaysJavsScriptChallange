

let time =  new Date('17 Aug 2023');
let promoTime =  time * 60;
const countd = document.getElementById('countdown');
const countDown = ()=>{
  let timer =  setInterval(() => {
    if(promoTime<=0){
      clearInterval(timer);
      countd.innerHTML = 'Time Ended'
    }
    else{
      promoTime--;
  const days = Math.floor(promoTime / 3600 / 24);
  const hours = Math.floor(promoTime / 3600 ) % 24;   
  const minutes = Math.floor(promoTime / 60 ) % 60;  
  const seconds = Math.floor(promoTime  % 60 ) ;
  const miliSeconds = Math.floor(promoTime / 3600 / 90 );
  console.log(miliSeconds);

  countd.innerHTML = `<div class="hours">${format(hours)}<div>Hours</div> </div> <div class="minutes">${format(minutes)}<div>Min</div></div> <div class="seconds">${format(seconds)}<div>sec</div></div> `

  }
  }, 1000);
    
}
countDown();

function format(t){
    return t  < 10 ? `0${t} ` : t
}



// Time Countdown
// let time = 1; // Time in minutes
// let promoTime = time * 60;

// let counting = document.getElementById("countdown");

// function startCountdown() {
//   let promoTimer = setInterval(() => {
//     if (promoTime <= 0) {
//       clearInterval(promoTimer);
//       counting.innerHTML = "Promo has ended.";
//     } else {
//       promoTime--;
//       let day = Math.floor(promoTime / 3600 / 24);
//       let hours = Math.floor(promoTime / 3600) % 24;
//       let min = Math.floor(promoTime / 60) % 60;
//       let sec = Math.floor(promoTime % 60);

//       counting.innerHTML = `TIME: ${format(hours)}hr : ${format(
//         min
//       )}min : ${format(sec)}`;
//     }
//   }, 1000);
// }


// function format(t) {
//   return t < 10 ? `0${t}` : t;
// }
