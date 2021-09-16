const playGame = document.querySelector('.btn-start')
const loadingGame = document.querySelector('.loading-game')
const soccerGame = document.querySelector('.soccer-game')
const mainplayGame = document.querySelector('.play-game')




playGame.addEventListener('click', () => {
        mainplayGame.classList.add('hidden')
        loadingGame.classList.add('show')
       

} )


let progressBar = document.querySelector("progress")
let progressBarValue = 0       

function animationBar(speed) {

    if (mainplayGame.classList.contains('hidden')) {
        progressBarValue++ 
    } 

    progressBar.setAttribute('value', progressBarValue);
    setTimeout( ()=> {fillBar()}, speed )

}

function fillBar() {

    if (progressBarValue < 101){
        animationBar(40, true)
        
    } 

    if (progressBarValue == 100) {
        soccerGame.classList.add('show')
        loadingGame.classList.toggle('show')
    }

}

fillBar()
