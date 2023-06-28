let word = document.querySelector('.input-text');
let btn = document.querySelector('.btn');

btn.addEventListener('click',Copytext);

function Copytext(e){
    e.preventDefault();
    
    
    word.select();  
    word.setSelectionRange(0, 9999);
    document.execCommand('copy');
   



    setTimeout(()=>{
        btn.textContent =  'Copy';

    },2000)
}   