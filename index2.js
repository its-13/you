console.log('started');

var header = document.getElementById("header");
let a = document.getElementById("a");

window.onscroll = function(){
    var scroll = window.scrollY;
    console.log(scroll);
    
    if(scroll >= 780){
        header.style.backgroundColor = '#7918e9';
        header.style.color = '#fff';
        header.style.opacity = '0.85';
        // document.getElementsByClassName("fa-solid")[0].style.color = '#fff'
        a.style.color = '#fff'
        
        if( scroll >= 1575){
            header.style.backgroundColor = '#4a2488';
            header.style.color = '#fff';
            a.style.color = '#fff'
        }        
        if( scroll >= 2380){
            header.style.backgroundColor = 'rgb(71 104 219)';
            header.style.color = '#fff';
            // document.getElementsByClassName("fa-solid")[0].style.color = '#fff'
            a.style.color = '#fff'
        }
        
        if( scroll >= 3173){
            header.style.backgroundColor = '#000734';
            header.style.color = '#fff';
            // document.getElementsByClassName("fa-solid")[0].style.color = 'blue'
            a.style.color = '#fff'
        }
        
        if( scroll >= 4088){
            header.style.backgroundColor = 'rgb(209 36 252)';
            header.style.color = '#fff';
            // document.getElementsByClassName("fa-solid")[0].style.color = '#fff'
            a.style.color = '#fff'
        }
        if( scroll >= 4922){
            header.style.backgroundColor = '#000632';
            header.style.color = '#fff';
            // document.getElementsByClassName("fa-solid")[0].style.color = '#fff'
            a.style.color = '#fff'
        }
    }
    else{
        header.style.backgroundColor = '#350839';
        header.style.color = '#fff';
        // document.getElementsByClassName("fa-solid")[0].style.color = '#fff'
        a.style.color = '#fff'
    }
}


var audio = document.getElementById("music");
function play(){
    audio.play();
}