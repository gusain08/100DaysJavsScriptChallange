const api = {
    key :"15ec59d25ca27ab3078708515011a399",
    baseurl :"https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', searchData);

function searchData(e){
        if(e.type == "click"){
            getData(search.value);
            console.log(search.value);
        }
}

const getData =()=>{
    fetch(`${api.baseurl}weather?q=${search.value}&units=metric&appid=${api.key}`).then((response)=>{
        return response.json();
    }).then(displayData);
}

function displayData(result){
    if(result.cod == "404"){
        const error = document.querySelector('.error');
        error.textContent ="Please Enter a valid city"
    }else{
        const city = document.querySelector('.city');
        city.innerText = `${result.name} , ${result.sys.country}`;

        const today = new Date();
        const date  = document.querySelector(".date");
        date.innerText = dateFunction(today);
        console.log(today);

        const temp  = document.querySelector(".temp");
        temp.innerHTML = `Temp :  ${Math.round(result.main.temp)} <span>&deg; C</span>`

        const weather =  document.querySelector(".weather");
        weather.innerHTML = `Weather : ${result.weather[0].main}`

        const temp_range =  document.querySelector(".temp-range");
        temp_range.innerHTML = `Temp Range : ${Math.round(result.main.temp_min)} <span>&deg; C</span> / ${Math.round(result.main.temp_max)} <span>&deg; C</span>`
    
        const weatherIcon = document.querySelector('.weather-icon');
        const iconurl  =  "https://openweathermap.org/img/w/"
        weatherIcon.src = iconurl + result.weather[0].icon + ".png";
    
    }
    console.log(result);    
}


function dateFunction(d){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
    
    const day =  days[d.getDay()];
    const date = d.getDate();

    const month=  months[d.getMonth()]
    const year = d.getFullYear();

    return `${day}, ${date} ${month} ${year} `

}   




// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());


document.onkeydown = function (e) {
 
    // disable F12 key
    if(e.keyCode == 123) {
        return false;
    }

    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }

    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}