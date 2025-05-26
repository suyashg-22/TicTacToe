
let buts = document.querySelectorAll(".but");
let reset = document.querySelector("#reset");
let winpara = document.querySelector(".winpara");
let newgame = document.querySelector(".newgame");
let wincontainer = document.querySelector(".wincontainer");
let container = document.querySelector(".container");
let turnx = true;
let count = 0;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

const gameDraw = () => {
    winpara.innerText = `Game was a Draw.`;
    hideprop();
    markallbtn();
};

const markallbtn = () => {
    for (let but of buts) {
        but.disabled = true;
    }
}
const unmarkallbtn = () => {
    for (let but of buts) {
        but.disabled = false;
        but.innerText = "";
    }
}

const NewGame=()=>{
    turnx=true;
    count =0;
    wincontainer.classList.add("hide");
    container.classList.remove("hide");
    unmarkallbtn();
}

const resetGame = () => {
    turnx = true;
    count = 0;
    // hideprop();
    unmarkallbtn();

};

const hideprop = () => {
    wincontainer.classList.remove("hide");
    container.classList.add("hide");
}

const gameover = (winner) => {
    winpara.innerText = `CONGRATULATIONS!!! winner is${winner}`;
    hideprop();
    markallbtn();
}

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let val1 = buts[pattern[0]].innerText;
        let val2 = buts[pattern[1]].innerText;
        let val3 = buts[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                gameover(val1);
                return true;
            }

        }
    }

}

buts.forEach((but) => {
    but.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnx) {
            but.innerText = "X";
            turnx = false;
        }
        else {
            but.innerText = "O";
            turnx = true;
        }
        but.disabled = true;
        count++;
        let iswinner = checkwinner();
        if (count == 9 && !iswinner) {
            gameDraw();
        }
        console.log("game over");
    })
})




newgame.addEventListener("click", NewGame);
reset.addEventListener("click", resetGame);