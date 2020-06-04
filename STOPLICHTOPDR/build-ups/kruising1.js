//variables
var stoplicht = document.getElementById('stoplicht');
var stoplicht2 = document.getElementById('stoplicht2');

//animaties
var werken;
var buitenwerking;

//stoplicht CSS?
stoplicht.style.position = 'absolute';
stoplicht.style.left = '720px';
stoplicht.style.top = '510px';

//stoplicht2 CSS?
stoplicht2.style.position = 'absolute';
stoplicht2.style.left = '510px';
stoplicht2.style.top = '320px';

//Stoplichten runnen
function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood();
    werken = setTimeout(maakGroen, 4000);
    werken = setTimeout(maakGeel, 8000);
    werken = setTimeout(aanzetten, 10000);
}

//Stoplichten knipperen
function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(zetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
}

//stoplichten uitzetten
function uitzetten() {
    zetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

function maakRood() {
    stoplicht.src="../images/stoplichtrood.png";
    stoplicht2.src="../images/stoplichtrood2.png";
    slir_lr = false;
}

function maakGroen() {
    stoplicht.src="../images/stoplichtgroen.png";
    stoplicht2.src="../images/stoplichtgroen2.png";
    slir_lr = true;
}

function maakGeel() {
    stoplicht.src="../images/stoplichtgeel.png";
    stoplicht2.src="../images/stoplichtgeel2.png";
    slir_lr = true;
}

function zetUit() {
    stoplicht.src="../images/stoplichtuit.png";
    stoplicht2.src="../images/stoplichtuit2.png";
}

//------------------------------------------------------------------------
//variables
var auto = document.getElementById('auto');
var auto2 = document.getElementById('auto2');

//animaties
var rijden;
var slir_lr = false;

//auto CSS?
auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '700px';

//auto2 CSS?
auto2.style.position = 'absolute';
auto2.style.left = '560px';
auto2.style.bottom = '650px';

//Stopt auto
function stop() {
    clearTimeout(rijden);
}

//auto positie resetten
function opnieuw() {
    clearTimeout(rijden);
    auto.style.top = '700px';
    auto2.style.bottom = '650px';
}

//------------------------------------------------------------------------------
function starten() {
    //Zodat de auto stoppen voor de stoplicht
    //auto van beneden naar boven
    if (slir_lr === false && auto.style.top === 530 + 'px'){
        auto.style.top = parseInt(auto.style.top) - 'px';
    }
    else{
        auto.style.top = parseInt(auto.style.top) - 5 + 'px';
    }

    //auto van boven naar beneden
    if (slir_lr === false && auto2.style.bottom === 380 + 'px'){
        auto2.style.bottom = parseInt(auto2.style.bottom) - 'px';
    }
    else{
        auto2.style.bottom = parseInt(auto2.style.bottom) - 5 +'px';
    }

    rijden = setTimeout(starten,10);
}

//------------------------------------------------------------------------------
setInterval(
    function(){
        if (parseInt(auto.style.top) < -80){
            auto.style.top = '780px';}
    }, 100);

setInterval(
    function () {
        if (parseInt(auto2.style.bottom) < -80){
            auto2.style.bottom = '780px';}
    }, 100);