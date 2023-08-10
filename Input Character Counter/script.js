let count  = document.querySelector('.count ');
let input =  document.querySelector('.form-control');

input.addEventListener("keyup",()=>{
  count.innerHTML  = input.value.length;
});