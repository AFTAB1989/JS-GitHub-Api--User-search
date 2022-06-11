const daysEl  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl  = document.getElementById('seconds');



const newYear = '1 jan 2023';
const eidFitr = '2 jan 2023';
const eidAdha = '3 jan 2023';

function fitr(){
    document.getElementById("body").style.backgroundImage="url(Eid-al-Fitr-wallpapers-hd-768x576.jpg)";
    document.getElementById("title").innerHTML="Eid-Ul-Fitr";
}

function azha(){
    document.getElementById("body").style.backgroundImage="url(eid-al-adha-greeting-with-goat-mosque.jpg)";
    document.getElementById("title").innerHTML="Eid-Ul-Adha";
}


function countdown(){
    const newYearDate = new Date(newYear);
    const eidFitrDate = new Date(eidFitr);
    const eidAdhaDate = new Date(eidAdha);
    const currentDate = new Date();
    var occation = newYearDate;

    // switch(occation) {
    //     case newYearDate:
    //         occation = newYearDate;
    //       break;
    //     case eidFitrDate:
    //         occation = eidFitrDate;
    //       break;
    //     default:
    //         occation = newYearDate;
    //   }

    const totalseconds = (occation - currentDate) / 1000;



    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds =  Math.floor(totalseconds) % 60;

    daysEl.innerHTML  = days;
    hoursEl.innerHTML = timeFormet(hours);
    minsEl.innerHTML = timeFormet(mins);
    secondsEl.innerHTML = timeFormet(seconds);
}

function timeFormet(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);


function openfunction(){
    document.getElementById("sidebar").style.width="300px";
    document.getElementById("mainbox").style.marginright="300px";
    document.getElementById("mainbox").innerHTML="cross";
}

function closefunction(){
    document.getElementById("sidebar").style.width="0px";
    document.getElementById("mainbox").style.marginright="0px";
    document.getElementById("mainbox").innerHTML="&#9776; open";

}