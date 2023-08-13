let  get_quotes = document.querySelector('.get_quotes');
let quotes = document.querySelector('.quotes');
let number = document.querySelector('#number');
get_quotes.addEventListener('click', getQuotes);

function getQuotes(e){
    e.preventDefault();
    if(number.value.length == 0){
          return alert('Please Enter the Value');              
    }
    fetch('https://type.fit/api/quotes')
    .then(res=>res.json())
    .then((result) =>{
        console.log(result);
        shuffle(result);

        let output = "";
    
        for(let i=0; i<result.length; i++){
                if(i==number.value){
                        break;
                }
                output +=`

                <li>
                    <p><b>Quotes : </b>${result[i].text}</p>
                    <h6><b>Author : </b>${result[i].author}</h6>
                </li>
                `;
        }
        quotes.innerHTML =  output;
    });
}



//  FUNCTION TO SHUFFLE QUOTES

function shuffle(quotes) {

    let CI =  quotes.length, tempValue, randomIndex;

    while(CI> 0){
        CI--;
        randomIndex = Math.floor(Math.random() * CI);

        tempValue = quotes[CI];
        quotes[CI] =quotes[randomIndex];

        quotes[randomIndex] = tempValue;

    }
    return quotes;
;}