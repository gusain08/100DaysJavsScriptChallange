const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");


window.addEventListener('load',()=>{
  statusDisplay.textContent = navigator.onLine ? "Online" :  "Offline"
});

window.addEventListener('Offline',()=>{
  statusDisplay.textContent =  "Offline"
});

window.addEventListener('Online',()=>{
  statusDisplay.textContent =  "Online"
});


  
const setColor=()=>{
  bgColor.classList.add('online');
}


   async function checkConnection(){
      try{
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
  
        image.src ="./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
      } catch(error){
        console.log(error);
        statusDisplay.textContent ='O0PS!!! Your Internet Connection is Down';
        bgColor.classList.remove('online');
        image.src ="./images/offline.png";
      }
   }



   setInterval(async()=>{
    const result = checkConnection();

    if(result){
      statusDisplay.textContent ='Your Are Online Connection Looks Goods';
      setColor();
    }

   },5000 );



   window.addEventListener('load', async (e)=>{
    if(checkConnection()){
      statusDisplay.textContent =  "You are Online";
    }else{
      statusDisplay.textContent =  "You are offline";
    }
    
  });