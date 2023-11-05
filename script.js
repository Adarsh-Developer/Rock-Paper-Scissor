let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')

let resultBox = document.querySelector('.resultbox')

let computerMove = ''

let result = ''


function computerChoose(){
    let randomNumber = Math.floor(Math.random()*3)
    if(randomNumber === 0){
        computerMove = 'rock'
    }else if(randomNumber === 1){
        computerMove = 'paper'
    }else{
        computerMove = 'scissor'
    }
}

function comparison(pmove){
    if(pmove === rock){
        if(computerMove === 'rock'){
            result = 'Tie'
        }else if(computerMove === 'paper'){
            result = 'You Loose'
        }else{
            result = 'You Won'
        }
    }else if(pmove === paper){
        if(computerMove === 'paper'){
            result = 'Tie'
        }else if(computerMove === 'scissor'){
            result = 'You Loose'
        }else{
            result = 'You Won'
        }
    }else{
        if(computerMove === 'scissor'){
            result = 'Tie'
        }else if(computerMove === 'rock'){
            result = 'You Loose'
        }else{
            result = 'You Won'
        }
    }
}

function display(){
    resultBox.style.transform = 'scale(1)'
    resultBox.innerHTML = `<span>Computer &nbsp;&nbsp; : &nbsp;&nbsp; ${computerMove}</span> <br> <h1>${result}</h1> <br> <button class = "buttonDesign">Play Again</button>`


    let playAgain = document.querySelector('.buttonDesign')

    playAgain.addEventListener("click", function(){
    resultBox.style.transform = 'scale(0)'
})
}

rock.addEventListener("click", function(){
    computerChoose()
    comparison(rock)
    display()
})

paper.addEventListener("click", function(){
    computerChoose()
    comparison(paper)
    display()
})

scissor.addEventListener("click", function(){
    computerChoose()
    comparison(scissor)
    display()
})