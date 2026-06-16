let userscore = 0;
let computerscore = 0;

const imgs = document.querySelectorAll(".imgs img");

const you = document.querySelector(".you-score");
const computer = document.querySelector(".comp-score");

const result = document.querySelector(".result");
const reset = document.querySelector("button");

let choice = ["rock","paper","scissor"]

function getcomputerchoice() {
    let randomchocie = Math.floor(Math.random()*3);
    return choice[randomchocie];
}


imgs.forEach((img,index)=> {
    img.addEventListener("click",()=>{
        result.style.backgroundColor = "";
        result.innerText = "Loading...";
        reset.disabled = true;
        setTimeout(() => {
            let userchoice = choice[index];
        let computerchoice = getcomputerchoice();

        if(userchoice === "rock" && computerchoice === "scissor" ||
           userchoice === "scissor" && computerchoice === "paper" ||
           userchoice === "paper" && computerchoice === "rock"){

            userscore++;
            you.innerText = userscore;
            result.innerText = `You won ${userchoice} beats ${computerchoice}`;
            result.style.backgroundColor = "green";

        } else if(userchoice === computerchoice){
            result.innerText = "Its a Draw";
            result.style.backgroundColor = "white";

        } else{
            computerscore++;
            computer.innerText = computerscore;
            result.innerText = `You lose ${computerchoice} beats ${userchoice}`;
            result.style.backgroundColor = "red";
        }   
        reset.disabled = false;
        }, 1000);    
    });
});      

reset.addEventListener("click",()=>{
    userscore = 0;
    computerscore = 0;
    you.innerText = 0;
    computer.innerText = 0;
    result.innerText = "Start the game";
    result.style.backgroundColor = "";
})

