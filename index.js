
function createBoard(){
    const grid = Array.from(document.querySelector(".game-board").children)
    grid.forEach((it) =>{
        it.style.border = "2px solid black";
    })
    const btn = document.querySelector("#restartButton")
    btn.style.marginTop = "20px";
    btn.style.padding = "5px";
    const board = document.querySelector('.game-board');
    board.style.justifyContent = "center";
    board.style.maxWidth = "100wh";
}
function changeval(val){
    return val == 'X' ? 'O' : 'X';
}

function checkWin(){
    const grid = Array.from(document.querySelectorAll('.cell'));
    const arr = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    for (let it of arr) {
        if (grid[it[0]].innerText == grid[it[1]].innerText && grid[it[2]].innerText == grid[it[1]].innerText && grid[it[0]].innerText != "") {
            return true;
        }
    }
    return false;
}
function draw(){
    const grid = Array.from(document.querySelectorAll('.cell'));
    for(let i = 0; i < grid.length; i++){
        if(grid[i].innerText == "") return false;
    }
    return true;
}
let val = 'X';
let arr = [];
function control(e){
    if(e.target.innerText == ""){
        e.target.innerText = val;
        console.log(checkWin());
        if(checkWin()){
            alert(`${val} wins!`);
            grid.removeEventListener('click', control);
        }
        if(draw()){
            alert("It's a draw!");
            grid.removeEventListener('click', control);
        }
        val = changeval(val);
        arr.push(e.target);
    }
}
const grid = document.querySelector(".game-board");
grid.addEventListener("click", control);
createBoard();
document.querySelector("#restartButton").addEventListener('click', () =>{
    const grid2 = Array.from(document.querySelectorAll('.cell'));
    grid2.forEach((it) =>{
        it.innerText = "";
    });
    grid.addEventListener("click", control);
    val = 'X';
    arr = [];
});
const div = document.createElement('button');
div.id = "undoButton"
div.innerText = "Undo";
div.style.marginTop = "20px";
// div.style.marginBottom = "20px";
div.style.padding = "5px";
document.querySelector("body").insertBefore(div, document.querySelector("#restartButton"));

div.addEventListener('click', ()=>{
    if(arr.length != 0){
        let val = arr.pop();
        val.innerText = "";
    }
});