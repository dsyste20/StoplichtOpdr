//variables
var stoplicht = document.getElementById('stoplicht');
var stoplicht2 = document.getElementById('stoplicht2');
var stoplicht3 = document.getElementById('stoplicht3');
var stoplicht4 = document.getElementById('stoplicht4');

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

//stoplicht3 CSS?
stoplicht3.style.position = 'absolute';
stoplicht3.style.left = '485px';
stoplicht3.style.top = '510px';

//stoplicht4 CSS?
stoplicht4.style.position = 'absolute';
stoplicht4.style.left = '720px';
stoplicht4.style.top = '335px';

//Stoplichten runnen
function aanzetten() {
    clearTimeout(buitenwerking);
    maakRoodGroen();
    werken = setTimeout(maakRoodGeel, 4000);
    werken = setTimeout(maakRoodRood, 6000);
    werken = setTimeout(maakGroenRood, 8000);
    werken = setTimeout(maakGeelRood, 12000);
    werken = setTimeout(maakRoodRood, 15000);
    werken = setTimeout(aanzetten, 17000);
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

function maakGeel() {
    stoplicht.src="images/stoplichtgeel.png";
    stoplicht2.src="images/stoplichtgeel2.png";
    stoplicht3.src="images/stoplichtgeel3.png";
    stoplicht4.src="images/stoplichtgeel4.png";
}

function maakRoodGroen() {
    stoplicht.src="images/stoplichtrood.png";
    stoplicht2.src="images/stoplichtrood2.png";
    stoplicht3.src="images/stoplichtgroen3.png";
    stoplicht4.src="images/stoplichtgroen4.png";
    slir_lr = false;
    slir_bb = true;
}

function maakRoodGeel() {
    stoplicht.src="images/stoplichtrood.png";
    stoplicht2.src="images/stoplichtrood2.png";
    stoplicht3.src="images/stoplichtgeel3.png";
    stoplicht4.src="images/stoplichtgeel4.png";
    slir_lr = false;
    slir_bb = true;
}

function maakRoodRood() {
    stoplicht.src="images/stoplichtrood.png";
    stoplicht2.src="images/stoplichtrood2.png";
    stoplicht3.src="images/stoplichtrood3.png";
    stoplicht4.src="images/stoplichtrood4.png";
    slir_lr = false;
    slir_bb = false;
}

function maakGroenRood () {
    stoplicht.src="images/stoplichtgroen.png";
    stoplicht2.src="images/stoplichtgroen2.png";
    stoplicht3.src="images/stoplichtrood3.png";
    stoplicht4.src="images/stoplichtrood4.png";
    slir_lr = true;
    slir_bb = false;
}

function maakGeelRood () {
    stoplicht.src="images/stoplichtgeel.png";
    stoplicht2.src="images/stoplichtgeel2.png";
    stoplicht3.src="images/stoplichtrood3.png";
    stoplicht4.src="images/stoplichtrood4.png";
    slir_lr = true;
    slir_bb = false;
}

function zetUit() {
    stoplicht.src="images/stoplichtuit.png";
    stoplicht2.src="images/stoplichtuit2.png";
    stoplicht3.src="images/stoplichtuit3.png";
    stoplicht4.src="images/stoplichtuit4.png";
}

//------------------------------------------------------------------------
//variables
var auto = document.getElementById('auto');
var auto2 = document.getElementById('auto2');
var auto3 = document.getElementById('auto3');
var auto4 = document.getElementById('auto4');

//animaties
var rijden;
var slir_lr = false;
var slir_bb = false;

//auto CSS?
auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '700px';

//auto2 CSS?
auto2.style.position = 'absolute';
auto2.style.left = '560px';
auto2.style.bottom = '650px';

//auto3 CSS?
auto3.style.position = 'absolute';
auto3.style.left = '0px';
auto3.style.bottom = '220px';

//auto4 CSS
auto4.style.position = 'absolute';
auto4.style.right = '0px';
auto4.style.bottom = '300px';

//Stopt auto
function stop() {
    clearTimeout(rijden);
}

//auto positie resetten
function opnieuw() {
    clearTimeout(rijden);
    auto.style.top = '700px';
    auto2.style.bottom = '650px';
    auto3.style.left = '0px';
    auto4.style.right = '0px';
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

    //auto van links naar rechts
    if (slir_bb === false && auto3.style.left === 415 + 'px'){
        auto3.style.left = parseInt(auto.style.left) - 'px';
    }
    else{
        auto3.style.left = parseInt(auto3.style.left) + 5 + 'px';
    }
    //auto van rechts naar links
    if (slir_bb === false && auto4.style.right === 730 + 'px'){
        auto4.style.right = parseInt(auto4.style.right) - 'px';
    }
    else{
        auto4.style.right = parseInt(auto4.style.right) + 5 + 'px';
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

setInterval(
    function () {
        if (parseInt(auto3.style.left) > 1420){
            auto3.style.left = '-80px';}
        console.log(auto3.style.left)
    }, 100);

setInterval(
    function () {
        if (parseInt(auto4.style.right) > 1420){
            auto4.style.right = ' -80px';}
    }, 100);