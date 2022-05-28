console.log("Welcome to TicTacToe")
let turn = "x"
const changeTurn = () =>{
    if(turn=="x"){
        turn = "o"
    }
    else if(turn=="o"){
        turn = "x"
    }
    return turn
}
//function to check win
const checkWin= () =>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    wins.forEach(e => {
        if(boxtext[e[0]].innerText == boxtext[e[1]].innerText && boxtext[e[0]].innerText == boxtext[e[2]].innerText && boxtext[e[0]].innerText != "" )
        {
            let winner_turn = turn
            if(winner_turn=="x"){
                winner_turn = "o"
            }
            else {
                winner_turn = "x"
            }

            document.getElementsByClassName("info1")[0].innerText = "The winner is " + winner_turn;
            alert(document.getElementsByClassName("info1")[0].innerText = "The winner is " + winner_turn);
        }

    })

}
//main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click',()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            changeTurn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;


        }
    })
})
