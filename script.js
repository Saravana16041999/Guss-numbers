`use strict`

// score bords
const highScoretopEl = document.getElementById(`highscore_one`);
const highscoreEl = document.getElementById(`highscore`)
const ScoreEl = document.getElementById(`score`)

//getting from users
const inputEl = document.getElementById(`userNumber`);
const submitEl = document.getElementById('check')

//restart the hole game
const resetEl = document.getElementById('reset')
// msg
const msg = document.getElementById(`msg`)



submitEl.addEventListener('click',()=>{
    let number = Math.ceil(Math.random() * 20)
    
    if(inputEl ===''){
        msg.innerText = `please give valide answer`
    }
})