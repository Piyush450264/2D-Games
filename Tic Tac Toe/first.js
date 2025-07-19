let Boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn")
let newBtn=document.querySelector("#new-btn")
let msgcontent=document.querySelector(".msg-content")
let msg=document.querySelector("#msg")

let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetbtn=()=>{
    turnO=true;
    enableBoxes();
    msgcontent.classList.add("hide");
};

const disableBoxes=()=>{
    for(let box of Boxes){
        box.disabled=true;
    };
};

const enableBoxes=()=>{
    for(let box of Boxes){
        box.disabled=false;
        box.innerText="";
    };
};

Boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            //playerX
            box.innerText="X";
            turnO=false;
        }else{
            //playerO
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgcontent.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
    let pos1Val=Boxes[pattern[0]].innerText;
    let pos2Val=Boxes[pattern[1]].innerText;
    let pos3Val=Boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
        };
    };
    };
};

newBtn.addEventListener("click",resetbtn);
resetBtn.addEventListener("click",resetbtn);