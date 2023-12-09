let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('#reset-btn')
let newGameBtn = document.querySelector('#newgame-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')


// Player Turn - Player0 & PlayerX

let turn0 = true // Player0

// This concept is applied 👇

// // 1D Array
// const arr = ["a", "b", "c"]

// // 2D Array 
// const arr2 = [
//     ["x", "y", "z"],
//     ["a", "b", "c"],
//     ["1", "2", "3"]
// ]


const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = function() {
    turn0 = true
    enableBoxes()
    msgContainer.classList.add('hide')
    resetBtn.style.display = 'block'
    resetBtn.classList.remove('hide')
    resetBtn.style.transform = 'translateX(209px)'
}


boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        if(turn0) {
            box.innerText = "0"
            turn0 = false
            box.style.color = 'cyan'
        } else {
            box.innerText = "X"
            turn0 = true
            box.style.color = 'brown'
        }
        box.disabled = true

        checkWinner()
    })
})

const checkWinner = function() {
    for(let pattern of winningPattern){
       let pos1Val = boxes[pattern[0]].innerText 
       let pos2Val = boxes[pattern[1]].innerText
       let pos3Val = boxes[pattern[2]].innerText

       
       if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val)
            return true
        }
       }
    }
}

const disableBoxes = function() {
    for(let box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = function() {
    for(let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner = function(winner) {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove('hide')
    resetBtn.style.display = 'none'
    disableBoxes()
}

newGameBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)





