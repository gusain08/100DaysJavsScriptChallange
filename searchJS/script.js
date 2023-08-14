let search = document.querySelector('#search');
let notlist =  document.querySelector('.notlist');
search.addEventListener("keyup", searchlist);

function searchlist(){
    const inputValue = search.value; 
    const li = document.querySelectorAll('li');

    for(let i=0; li.length; i++){
        if(li[i].innerHTML.toLowerCase().includes(inputValue)){
            li[i].style.display =""; 
            notlist.style.display ="none";
        }else{
            notlist.innerHTML = "No Data Found";
            li[i].style.display ="none"; 
        }
    }
    
}