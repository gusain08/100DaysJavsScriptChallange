const btn = document.getElementById("btn");


function getuser(e){
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            return res.json();
    }).then((response) =>{
          
            let output = "";
                
            response.forEach((items)=>{
                console.log(items);
                   return  output += `
                   <hr/>
                   <ul>
                       <li>${items.name}</li>
                       <li>${items.email}</li>
                   </ul>
                   `;
            });
            

            document.querySelector('#users').innerHTML=output;

    });
   
}
btn.addEventListener('click' , getuser);