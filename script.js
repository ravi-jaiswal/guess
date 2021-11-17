'use strict';

const MAX=20;
const MIN=0;
let score=20;
let highscore=0;

let myNumber= Math.floor((Math.random()*(MAX-MIN)+MIN))+1;


let checkButton=document.querySelector('[class="btn check"]');
checkButton.addEventListener("click",function(){

    score=parseInt(document.querySelector('[class="score"]').innerHTML);
    let entered_value=parseInt(document.querySelector('[class="guess"]').value);

    if(entered_value<myNumber)
    {
        let message=document.querySelector('[class="message"]');
        message.innerHTML="Too Low";
        score--;
        document.querySelector('[class="score"]').innerText=score;

    }
    else if(entered_value>myNumber){
        let message=document.querySelector('[class="message"]');
        message.innerHTML="Too High";
        score--;
        document.querySelector('[class="score"]').innerText=score;

    }
    else{
        let message=document.querySelector('[class="message"]');
        message.innerHTML="Bull's eye";
        document.querySelector('[class="number"]').innerText=myNumber;
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('[class="highscore"]').innerText=highscore;
        }

    }

    
})

let againBtn=document.querySelector('[class="btn again"]');

againBtn.addEventListener("click",function(){
    score=20;
    document.querySelector('[class="message"]').innerText="Guess my Number";
    document.querySelector('[class="score"]').innerText=score;
    document.querySelector('[class="number"]').innerText="?";
    document.querySelector('[class="guess"]').value="";
    myNumber= Math.floor((Math.random()*(MAX-MIN)+MIN))+1;

});


