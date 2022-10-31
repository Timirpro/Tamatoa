let first_value;
let second_value;
let third_value;
let rnd_value;
let int_rnd_value;
let i = 0;
let stat = 0;
const first_sector = document.querySelector('.first_sector');
const second_sector = document.querySelector('.second_sector');
const third_sector = document.querySelector('.third_sector');
const statistics = document.querySelector('.text');
first_sector.addEventListener("click", function() {pickFunction(0);});
second_sector.addEventListener("click", function() {pickFunction(1);});
third_sector.addEventListener("click", function() {pickFunction(2);});
function randomChoice() {
    rnd_value = 3 * Math.random();
    console.log(rnd_value);
}
function showGreenSector() {
    if (int_rnd_value == 0) {
        first_sector.style.backgroundColor = "green";
        randomChoice() 
        setTimeout(function(){
            first_sector.removeAttribute("style");
        }, 400);
    }
    else if (int_rnd_value == 1) {
        second_sector.style.backgroundColor = "green";
        randomChoice() 
        setTimeout(function(){
            second_sector.removeAttribute("style");
        }, 400); 
    }
    else {
        third_sector.style.backgroundColor = "green";
        randomChoice() 
        setTimeout(function(){
            third_sector.removeAttribute("style");
        }, 400);       
    }
}
function pickFunction(sector_number) {
    int_rnd_value = Math.floor(rnd_value);
    console.log(int_rnd_value);
    if (sector_number == int_rnd_value) {
        console.log("correct");
        stat = (stat * i + 100) / (i + 1);
    }
    else {
        console.log("wrong");
        stat = (stat * i + 0) / (i + 1);
    }
    console.log(stat);
    statistics.innerText = Math.round(stat).toString() + "%";
    i++;
    showGreenSector();
}
