var drumElements  = document.querySelectorAll(".drum");

// drumElements.forEach((hitDrums)=>{
//     hitDrums.addEventListener("click", ()=>{
       
//         var buttonText = this.innerHTML;
//         console.log(buttonText);
//         switch(buttonText){
//             case 'w' : var tom1 = new Audio('./sounds/tom-1.mp3');
//             tom1.play();
//             break;
//             case 'a' : var tom2 = new Audio('./sounds/tom-2.mp3');
//             tom2.play();
//             break;
//             case 's' : var tom3 = new Audio('./sounds/tom-3.mp3');
//             tom3.play();
//             break;
//             case 'd' : var tom4 = new Audio('./sounds/tom-4.mp3');
//             tom4.play();
//             break;
//             case 'j' : var jsound = new Audio('./sounds/snare.mp3');
//             jsound.play();
//             break;
//             case 'k' : var ksound = new Audio('./sounds/crash.mp3');
//             ksound.play();
//             break;
//             case 'l' : var isound = new Audio('./sounds/kick-bass.mp3');
//             isound.play();
//             break;
//             default : alert("hell");
//         }


//     })
// });








for (var i = 0; i < drumElements.length; i++) {
    drumElements[i].addEventListener('click', function() {
        // // var audio = new Audio('./sounds/snare.mp3');
        // // audio.play();
        
        // // console.log(this.innerHTML);
        // this.style.color = "white";

        var buttonText = this.innerHTML;
        keypressSound(buttonText);
        AnimationFun(buttonText);
        // switch(buttonText){
        //     case 'w' : var tom1 = new Audio('./sounds/tom-1.mp3');
        //     tom1.play();
        //     break;
        //     case 'a' : var tom2 = new Audio('./sounds/tom-2.mp3');
        //     tom2.play();
        //     break;
        //     case 's' : var tom3 = new Audio('./sounds/tom-3.mp3');
        //     tom3.play();
        //     break;
        //     case 'd' : var tom4 = new Audio('./sounds/tom-4.mp3');
        //     tom4.play();
        //     break;
        //     case 'j' : var jsound = new Audio('./sounds/snare.mp3');
        //     jsound.play();
        //     break;
        //     case 'k' : var ksound = new Audio('./sounds/crash.mp3');
        //     ksound.play();
        //     break;
        //     case 'l' : var isound = new Audio('./sounds/kick-bass.mp3');
        //     isound.play();
        //     break;
        //     default : alert("hell");
        // }

    });
}



document.addEventListener("keypress",(e)=>{
   keypressSound(e.key);
   AnimationFun(e.key);
});

const keypressSound = function(key){
    switch(key){
        case 'w' : var tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;
        case 'a' : var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;
        case 's' : var tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;
        case 'd' : var tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
        break;
        case 'j' : var jsound = new Audio('./sounds/snare.mp3');
        jsound.play();
        break;
        case 'k' : var ksound = new Audio('./sounds/crash.mp3');
        ksound.play();
        break;
        case 'l' : var isound = new Audio('./sounds/kick-bass.mp3');
        isound.play();
        break;
        default : console.log('heloo');
    }

}

const AnimationFun = (currentKey)=>{
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(()=>{
        activeButton.classList.remove('pressed');
    },100);
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
