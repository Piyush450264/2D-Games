let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const showWinner=(userWins,userChoice,compChoice)=>{
    if(userWins){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="red";
    };
};

const drawGame=()=>{
    msg.innerText="Game was Draw.Play again."
    msg.style.backgroundColor="black";
};

const playGames=(userChoice)=>{
    console.log("user choice:",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice:",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWins=true;
        if(userChoice==="rock"){
            userWins=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWins=compChoice==="scissors"?false:true;
        }else if(userChoice==="scissors"){
            userWins=compChoice==="rock"?false:true;
    };
    showWinner(userWins,userChoice,compChoice);
}
};

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGames(userChoice);
    });
});