// const countTo =


const countTo =  "1 Jan 2024";

const countDown = ()=>{
        const endDate = new Date(countTo);
        console.log(endDate);
        const currentDate =  new Date();
        console.log(currentDate);
        const totalSeconds = (endDate - currentDate) / 1000;
  
    const days = Math.floor(totalSeconds / 3600 / 24);
   
    const hours = Math.floor(totalSeconds / 3600 ) % 24;   

    const minutes = Math.floor(totalSeconds / 60 ) % 60;  

    const seconds = Math.floor(totalSeconds) % 60;  


    const countd = document.getElementById('countdown');
    
    countd.innerHTML = `<div class="days">${format(days)}<div>Days</div></div> <div class="hours">${format(hours)}<div>Hours</div> </div> <div class="minutes">${format(minutes)}<div>Min</div></div> <div class="seconds">${format(seconds)}<div>sec</div></div> `

    if(totalSeconds <=0){
        countd.textContent = "Happy New Year"
    }
}
countDown();

function format(t){
    return t  < 10 ? `0${t} ` : t
}