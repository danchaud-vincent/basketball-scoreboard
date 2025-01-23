let scoreHomeEl = document.getElementById("home-score-el");
let scoreGuestEl = document.getElementById("guest-score-el");
let timerEl = document.getElementById("timer");
let periodEl = document.getElementById("period");


let homeCount = 0;
let guestCount = 0;
let timerValue = null;
let periodValue = 1;

function addOne(id){

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


// NEW GAME function
function startGame(){

    // timer
    if (timerValue === null){
        // set timer
        timerValue = timer();
    }
    else{
        // clear timer
        clearInterval(timerValue);

        // set timer
        periodEl.innerText = 1;
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
    var sec = 30;
    var countdown = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+ sec.toString().padStart(2,"0");
        sec--;

        if (sec < 0 ) {
            // clear countdown
            clearInterval(countdown);

            if (periodValue <4){

                //reset timer
                timer();

                // set new period
                periodValue += 1;
                periodEl.innerText = periodValue;
            } 
        }

    }, 1000);

    console.log(countdown)

    return countdown
}