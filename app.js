let gameSeq=[];
let userSeq=[];
let btns=['yellow','red','purple','green'];
let level=0;
let started = false;
h4=document.querySelector("h4");
//keypress first logic 
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});
//bydefault btn is flash
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
//next user flash 
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}
//level up functions 
function levelUp(){
    userSeq=[];
    level++;
 h4.innerText= `Level ${level}`;
 let randIdx=Math.floor(Math.random()*btns.length);
 let randColor=btns[randIdx];
 let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

//when user press the button 

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);

    let idx = userSeq.length - 1;
    checkAns(idx);
}

let allbtn=document.querySelectorAll('.btn')
for(let btn of allbtn){
    btn.addEventListener('click',btnPress)
}

//checkAns function
function checkAns(idx){
   // console.log('Current Level : ',level)
   if(userSeq[idx]===gameSeq[idx]){
   if(userSeq.length===gameSeq.length){
   setTimeout(levelUp,1000);
   }
   }else{
    h4.innerHTML=`Game Over! your Score is <b>${level}</b> <br>please press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
   }
}

function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}