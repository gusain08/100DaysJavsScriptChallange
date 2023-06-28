let add  = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let rest  = document.querySelector('.reset');
let count = document.querySelector('.count');
let buttons = document.querySelector('.buttons');


buttons.addEventListener('click',(e)=>{
    if(e.target.classList.contains('add')){
        count.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains('subtract')){
       
            count.innerHTML--;
            setColor();
    }

    if(e.target.classList.contains('reset')){
        count.innerHTML = 0;
        setColor();
    }
})  



// add.addEventListener('click',()=>{
//     count.innerHTML++;
// });

// subtract.addEventListener('click',()=>{
//     if(count.innerHTML>0){
//         count.innerHTML--;
//     }
// });

// rest.addEventListener('click',()=>{
//     count.innerHTML = 0;
// });


let setColor = ()=>{
    if(count.innerHTML>0){
        count.style.color = 'yellow';
    }
    else if(count.innerHTML < 0){
        count.style.color = 'red';
    }else {
        count.style.color =  'white';
    }
}