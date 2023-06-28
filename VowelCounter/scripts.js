let word = document.querySelector('.input-text');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', vowelCount);
function vowelCount(){
   let count = 0;
    let wordVal= word.value.toLowerCase();
    for(let i=0; i<wordVal.length; i++){
        let lettes = wordVal[i];

        if(lettes.match(/([a,e,i,o,u])/))
        count++;
        result.innerHTML = `${word.value.toUpperCase()} has  ${count} vowels`;
        
    }
   
}