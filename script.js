`use strict`

// score bords
const highScoretopEl = document.getElementById(`highscore_one`);
const highscoreEl = document.getElementById(`highscore`)
const ScoreEl = document.getElementById(`score`)

//getting from users
const inputEl = document.getElementById(`userNumber`);
const submitEl = document.getElementById('check')
const chanceEl = document.getElementById('chance')

//restart the hole game
const resetEl = document.getElementById('reset')
// msg
const msg = document.getElementById(`msg`)

let number = Math.ceil(Math.random() * 20)
let highscore = 0;
let score = 0;
chance = 5;

//functions:
function init(){
    highScoretopEl.innerText = highscore;
    highscoreEl.innerText = highscore;
    ScoreEl.innerText = score;
    chanceEl.innerText = chance
}

massage = {
    win : '🎉 You Won!..',
    Higher : '☝🏾 It is Higher..',
    Lower : '👎🏾 It is Lower'
}



submitEl.addEventListener('click',()=>{
    let guss = Math.round(Number(inputEl.value)); 
    if(chance > 1){
        if(!guss || guss < 0){
            msg.innerText = 'invalide input try again'
        }else{
            if(guss === number){
                score  = score+1
                msg.innerText = 'Nice One'
                let liEl = document.createElement('li')
                msg.appendChild(liEl)
                liEl.innerText = massage.win
                number = Math.ceil(Math.random() * 20)
                chance = 5;
            }else if(guss > number){
                msg.innerText = 'Nice One'
                let liEl = document.createElement('li')
                msg.appendChild(liEl)
                liEl.innerText = massage.Lower
                chance--;
            }else{
                msg.innerText = 'Nice One'
                let liEl = document.createElement('li')
                msg.appendChild(liEl)
                liEl.innerText = massage.Higher
                chance--
            }  
        }
    }else{
            msg.innerText = 'you Lost'
            let liEl = document.createElement('li')
            msg.appendChild(liEl)
            liEl.innerText = 'click reset to try again'
            highscore = score
            number = Math.ceil(Math.random() * 20)
            score = 0
    }
    highScoretopEl.innerText = highscore + score
    inputEl.value = null
    init()
})

resetEl.addEventListener('click',()=>{
    ScoreEl.innerText = '0'
    highscoreEl.innerText = '0'
    number = Math.ceil(Math.random() * 20)
    highscore = score
    chanceEl.innerText = chance
    score = 0
    init()
})




init()