setInterval(DigitalClock,1000)

function DigitalClock(){

    let time = new Date();
    let hour = time.getHours();
    let mint = time.getMinutes();
    let second = time.getSeconds();

    let am_pm = "AM";

    if(hour >= 12){
        hour = hour - 12;
        am_pm = "PM"
    }
    else if(hour == 0 ){
        hour = 12;
        am_pm = "AM";
    }

    if(hour < 10){
        hour = "0"+hour;
    }else{
        hour = hour;
    }


    if(mint < 10){
        mint = "0"+mint;
    }else{
        mint = mint;
    }



    if(second <10){
        second = "0"+second;
    }else{
        second = second;
    }

    let CurrentTime = hour+" : "+mint+" : "+second + " " +am_pm;
    document.getElementById("clock").innerHTML = CurrentTime;
}

DigitalClock();