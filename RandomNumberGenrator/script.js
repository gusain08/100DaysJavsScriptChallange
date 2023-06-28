let hex = document.querySelector('.hex');
let reset  = document.querySelector('.reset ');

reset.addEventListener('click',()=>{
    let color =  Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = `#${color}`;
    hex.textContent = `#${color}`;
    console.log(color);
});