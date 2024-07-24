let Boxs=document.querySelectorAll(".Box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

Boxs.forEach((Box)=>{
    Box.addEventListener("click",() =>{
        if(turnO){
            Box.innerText = "O";
            turnO=false;
        }
        else{
            Box.innerText = "X";
            turnO=true;
        }
        Box.disabled = true;

        CheckWinner ();
    });
});

const disableBox=() => {
    for(let box of Boxs) {
        box.disabled = true;
    }
}
const enbleBox=() => {
    for(let box of Boxs) {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
    msg.innerText=`Congratulations winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBox();

}
const CheckWinner= ()=>{
    for(pattern of winPattern){
        let posVal1=Boxs[pattern[0]].innerText;
        let posVal2=Boxs[pattern[1]].innerText; 
        let posVal3=Boxs[pattern[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("winner");
                showWinner(posVal1);
            }
    }
}
};
const resetGame=() => {
    turnO=true;
    enbleBox();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);