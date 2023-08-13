let  get_quotes = document.querySelector('.get_quotes');
let quotes = document.querySelector('.quotes');
let number = document.querySelector('#number');
get_quotes.addEventListener('click', getQuotes);

function getQuotes(e){
    e.preventDefault();
    if(number.value.length == 0){
          return alert('Please Enter the Value');              
    }
    let http = new XMLHttpRequest();
    http.open("GET","https://type.fit/api/quotes", true);
    
    http.onload= function(){
        if(this.status === 200){
            const response = shuffle(JSON.parse(this.responseText));
            let output  = "";
            for(let i=0; i<response.length; i++){
                    if(i==number.value){
                        break;
                    }

                    output +=`
                        <li>
                        <p>${response[i].text}</p>
                        <h6>${response[i].author}</h6>
                        </li>
                    
                    `
            }
            quotes.innerHTML = output;
        }
       
        


    }

    http.send();
}


// function Shuffle  Quotes 

function shuffle(quotes){
    let Ci = quotes.length, tempValue , randomIndex;
    
    while(Ci > 0){
        randomIndex = Math.floor(Math.random() * Ci);
       Ci--;
       tempValue =  quotes[Ci];
       quotes[Ci] = quotes[randomIndex];
       quotes[randomIndex] = tempValue;

    }
    return quotes;
}



