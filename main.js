let scoreHomeEl = document.getElementById("home-score-el");
let scoreGuestEl = document.getElementById("guest-score-el");
let timerEl = document.getElementById("timer");
let periodEl = document.getElementById("period");
let showEl = document.getElementById("showEl");


let homeCount = 0;
let guestCount = 0;
let timerValue = null;
let periodValue = 1;
let winScore = 21;


// Functions addOne, addTwo, addThree
function addOne(id){

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
    
}

function addTwo(id){
    
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
}

function addThree(id){
    
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
}

// Function win
function win(){

    if (homeCount>winScore){
        console.log("The Home team Won the game") 
        showEl.style.visibility = "visible";
        showEl.innerHTML = "HOME's TEAM WINS THE GAME";
        showEl.style.backgroundColor = "red";
    }
    else{
        console.log("The Guest team Won the game") 
        showEl.innerHTML = "GUEST's TEAM WINS THE GAME";
    }
}


// NEW GAME function
function startGame(){

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
                win()
            }
        }

    }, 1000);

    return countdown
}