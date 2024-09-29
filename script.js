let boxes= document.querySelectorAll(".box"); //to access all boxes
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container"); 
let msg=document.querySelector("#msg");

let turnO=true; //to track no. of turnsl

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    ];

const resetGame=()=>{
        turnO =true;
        enableBoxes();
        msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        
        if(turnO){
            box.innerText="O";
            turnO = false;  //so that X chance also comes
        }
        else{
            box.innerText="X";
            turnO=true;// so that again O chance comes
        }
        box.disabled = true;
        
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled =true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};
const showWinner =(winner) =>{
    msg.innerText =`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes [pattern[0]].innerText; 
        let pos2Val=boxes [pattern[1]].innerText;
        let pos3Val=boxes [pattern[2]].innerText;
        
        
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if( pos1Val ===pos2Val && pos2Val === pos3Val){
        
            showWinner(pos1Val); }
    }
}
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
