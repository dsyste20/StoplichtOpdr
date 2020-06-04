//variables
var stoplicht = document.getElementById('stoplicht');

//animaties
var werken;
var buitenwerking;

//stoplicht CSS?
stoplicht.style.position = 'absolute';
stoplicht.style.left = '720px';
stoplicht.style.top = '510px';

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
    slir_lr = false;
}

function maakGroen() {
    stoplicht.src="../images/stoplichtgroen.png";
    slir_lr = true;
}

function maakGeel() {
    stoplicht.src="../images/stoplichtgeel.png";
    slir_lr = true;
}

function zetUit() {
    stoplicht.src="../images/stoplichtuit.png";
}

//------------------------------------------------------------------------
//variables
var auto = document.getElementById('auto');

//animaties
var rijden;
var slir_lr = false;

//auto CSS?
auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '700px';

//Stopt auto
function stop() {
    clearTimeout(rijden);
}

//auto positie resetten
function opnieuw() {
    clearTimeout(rijden);
    auto.style.top = '700px';
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

    rijden = setTimeout(starten,10);
}

//------------------------------------------------------------------------------
setInterval(
    function(){
        if (parseInt(auto.style.top) < -80){
            auto.style.top = '780px';}
    }, 100);