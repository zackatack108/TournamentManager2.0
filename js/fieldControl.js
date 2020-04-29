var interval;
var time;

function startTimer() {

    $("#startMatch").off("click");
    $("#startMatch").removeClass("bgRed").addClass("bgGrey");

    $("#resetMatch").off("click");
    $("#resetMatch").removeClass("bgRed").addClass("bgGrey"); 

    $("#stopMatch").on("click", stopTimer);
    $("#stopMatch").removeClass("bgGrey").addClass("bgRed");
    

    if(typeof time === "undefined"){
        time = $("#timer").html();
    }    

    if(time == "1:00") {
        timeInterval();
    } else {
        timeInterval();
    }

}

function timeInterval() {

    interval = setInterval(function() {

        let timer = time.split(':');

        let minutes = parseInt(timer[0], 10);
        let seconds = parseInt(timer[1], 10);

        if(minutes == 0 && seconds == 1) {

            clearInterval(interval);
            
            $("#startMatch").on("click", startTimer);
            $("#startMatch").removeClass("bgGrey").addClass("bgRed");
            $("#startMatch").html("Start Skills");

            $("#stopMatch").removeClass("bgRed").addClass("bgGrey");

        }

        minutes = (seconds == 0) ? --minutes : minutes;
        
        seconds = (seconds == 0) ? 59 : --seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        $("#timer").html(minutes + ":" + seconds);

        time = minutes + ":" + seconds;

       }, 1000);

    if(document.title == "Scoring Skills") {
        time = "1:00";
        $("#timer").html(time);
    }

}

function stopTimer() {

    clearInterval(interval);
    
    $("#startMatch").on("click", startTimer);
    $("#startMatch").removeClass("bgGrey").addClass("bgRed");
    $("#startMatch").html("Continue Skills");

    $("#stopMatch").off("click");
    $("#stopMatch").removeClass("bgRed").addClass("bgGrey");

    $("#resetMatch").removeClass("bgGrey").addClass("bgRed");
    $("#resetMatch").on("click", resetTimer);   

}

function resetTimer() {

    $("#startMatch").html("Start Skills");

    $("#resetMatch").removeClass("bgRed").addClass("bgGrey"); 

    if(document.title == "Scoring Skills") {
        time = "1:00";
        $("#timer").html(time);
    }

}

function setAutonomous() {

    $("#queueProgramming").off("click");
    $("#queueProgramming").addClass("bgGrey").removeClass("bgRed");

    $("#queueDrivers").on("click", setDrivers);
    $("#queueDrivers").addClass("bgRed").removeClass("bgGrey");

    $("#skillstype").html("Auto");

}

function setDrivers() {

    $("#queueProgramming").on("click", setAutonomous);
    $("#queueProgramming").addClass("bgRed").removeClass("bgGrey");

    $("#queueDrivers").off("click");
    $("#queueDrivers").addClass("bgGrey").removeClass("bgRed");

    $("#skillstype").html("Drivers");

}

$(function() {

    $("#startMatch").on("click", startTimer);
    $("#queueDrivers").on("click", setDrivers);

});
