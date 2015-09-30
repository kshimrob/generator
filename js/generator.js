var MORNING = 0; 
var AFTERNOON = 12; 
var EVENING = 18;

function greeting( ) {
    var sign = document.getElementById("greet");
    var hour = new Date().getHours();
    var mins = new Date().getMinutes();
    hour = hour + mins / 60;
    
    if (hour >= MORNING && hour < AFTERNOON) {
        sign.innerHTML = "good morning";
    //sign.className = "OPEN";//
    } 
    else if (hour >= AFTERNOON && hour < EVENING) {
        sign.innerHTML = "good afternoon";
    }
    else {
        sign.innerHTML = "good evening";
    //sign.className = "CLOSED";//
    }
}

alert(hour);