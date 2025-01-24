let scoreHomeEl = document.getElementById("home-score-el");
let scoreGuestEl = document.getElementById("guest-score-el");
let timerEl = document.getElementById("timer");
let periodEl = document.getElementById("period");
let showEl = document.getElementById("showEl");


let homeCount = 0;
let guestCount = 0;
let startValue = false;
let timerValue = null;
let periodValue = 1;
let winScore = 21;


// Functions addOne, addTwo, addThree
function addOne(id){

    // dont increment if the game has not started
    if (startValue === false){
        return
    }

    // check the id of the button to increment the right score
    if (id.includes("home") == true){
        // increment home's score
        homeCount += 1;
        scoreHomeEl.textContent = homeCount;
    }
    else{
        // increment guest's score
        guestCount += 1;
        scoreGuestEl.textContent = guestCount;
    }

    // check who is winning
    isWinning()
    
}

function addTwo(id){

    // dont increment if the game has not started
    if (startValue === false){
        return
    }
    
    // check the id of the button to increment the right score
    if (id.includes("home") == true){
        // increment home's score
        homeCount += 2;
        scoreHomeEl.textContent = homeCount;
    }
    else{
        // increment guest's score
        guestCount += 2;
        scoreGuestEl.textContent = guestCount;
    }

    // check who is winning
    isWinning()
}

function addThree(id){

    // dont increment if the game has not started
    if (startValue === false){
        return
    }
    
    // check the id of the button to increment the right score
    if (id.includes("home") == true){
        // increment home's score
        homeCount += 3;
        scoreHomeEl.textContent = homeCount;
    }
    else{
        // increment guest's score
        guestCount += 3;
        scoreGuestEl.textContent = guestCount;
    } 

    // check who is winning
    isWinning()
}

// Function winner
function winner(){

    if (homeCount>guestCount){
        console.log("The Home team Won the game") 
        showEl.style.visibility = "visible";
        showEl.innerHTML = "HOME's TEAM WINS THE GAME";
        showEl.style.backgroundImage = "url('/sources/videos/home_celebrate.gif')";
        showEl.style.backgroundSize = "cover";
    }
    else{
        console.log("The Guest team Won the game") 
        showEl.style.visibility = "visible";
        showEl.innerHTML = "GUEST's TEAM WINS THE GAME";
        showEl.style.backgroundImage = "url('/sources/videos/guest_win.gif')";
        showEl.style.backgroundSize = "cover";
    }
}

function isWinning(){

    if (homeCount>guestCount){
        scoreHomeEl.style.border = "2px solid #F94F6D";
        scoreGuestEl.style.borderStyle = "none";
    }
    else if (guestCount>homeCount){
        scoreGuestEl.style.border = "2px solid #F94F6D";
        scoreHomeEl.style.border = "none";
    }
    else{
        scoreGuestEl.style.border = "none";
        scoreHomeEl.style.border = "none";
    }
}


// NEW GAME function
function startGame(){

    startValue = true;

    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    
    // timer
    if (timerValue === null){
        // set timer
        timerValue = timer();
    }
    else{
        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
        
        // set timer
        periodValue = 1
        periodEl.innerText = periodValue;
        timerValue = timer();
    }
    

    // reset score and timer
    homeCount = 0;
    guestCount = 0;

    scoreHomeEl.textContent = homeCount;
    scoreGuestEl.textContent = guestCount;

    // reset html
    showEl.style.visibility = "hidden";
    showEl.innerHTML = "";
    showEl.style.backgroundImage = "none";
    scoreGuestEl.style.border = "none";
    scoreHomeEl.style.border = "none";
}


// Timer function
function timer(){

    var sec = 5;

    var countdown = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+ sec.toString().padStart(2,"0");
        sec--;

        if (sec < 0 ) {
            // clear countdown
            clearInterval(countdown);

            if (periodValue <4){

                // start the timer for the new period
                timer();

                // set new period
                periodValue += 1;
                periodEl.innerText = periodValue;
            }
            else{
                // check who has won the game
                winner()
            }
        }

    }, 1000);

    return countdown
}