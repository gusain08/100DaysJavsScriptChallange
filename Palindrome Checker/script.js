let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', palindromeCheck);

function palindromeCheck(){
   let word = document.querySelector('.input-text').value;
   let len =  word.length;
   
   let start = word.substring(0,  Math.floor(len/2));
   let end =  word.substring(len - Math.floor(len/2));

   let rev = [...end].reverse().join("");

   if(start == rev){
      result.innerHTML = `${word.toUpperCase()} is palindrome `;
   }else{
      result.innerHTML = `${word.toUpperCase()} is not  palindrome `;
   }
}