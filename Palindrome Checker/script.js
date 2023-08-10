let btn = document.querySelector('.btn');

let text =  document.querySelector('.result');


btn.addEventListener('click',checkpandrome);

function checkpandrome(){
   let word = document.querySelector('.input-text').value;
   let len  = word.length;
   let start =  word.substring(0, Math.floor(len/2)).toLowerCase();
   console.log(start);
   let end  =    word.substring(len - Math.floor(len/2)).toLowerCase();
   console.log(end);
   let revrse =  [...end].reverse().join("");

   if(start == revrse){
      text.innerHTML = `${word} is palindrome`;
   }
else{
   text.innerHTML = `${word} is not palindrome`;
}

}