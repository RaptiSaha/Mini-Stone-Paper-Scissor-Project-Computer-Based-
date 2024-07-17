//1.Initialization
let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");//Accessing all the elements i.e. stone,paper and scissor
const message=document.querySelector("#message");//to update the message afterwards
//2.To update the User and Comp score while playing the game
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");
//4.Geting the comp's choice then
const genCompChoice=()=>{
    const options=["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random())*3;
    return options[randIdx];
}
//5.Playing the game and setting the various cases of winning condition except the draw one
const playGame=(userchoice)=>{
    const compchoice=genCompChoice();
    //case 1
    if (userchoice===compchoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //rock/paper from comp
            userwin=compchoice===paper?false:true;
        }
        else if(userchoice==="paper"){
            //rock/scissor from comp
            userwin=compchoice===scissors?false:true;
         }
         else{
            //paper/scissor from comp
            userwin=compchoice==="stone"?false:true;
         }
         showWinner(userchoice,compchoice,userwin);
    }
}
//6.Draw condition
function drawGame(){
   message.innerText="Game was draw.Play Again!!!"
   message.style.backgroundColor="orange";
}
//7.show winner,score and the message]
function showWinner(userchoice,compchoice,userwin){
    if(userwin)//true
    {
        user_score++;
        userscorePara.innerText=user_score;
        message.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor="green";
    }
    else{
        comp_score++;
        compscorePara.innerText=comp_score;
        message.innerText=`You lost! ${compchoice} beats your ${userchoice}`;
        message.style.backgroundColor="red";
    }
}
//3.Getting the User's choice at first
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});
