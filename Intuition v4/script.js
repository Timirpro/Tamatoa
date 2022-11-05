let rnd_value;
let int_rnd_value;
let third_sector;
let li_3;
let i = 0;
let stat = 0;
let level = 1;
let ul = document.getElementById("wheel__sectors");
let first_sector = document.querySelector('.first_sector');
let second_sector = document.querySelector('.second_sector');
let statistics = document.querySelector('.text');
first_sector.addEventListener("click", function() {pickFunction(0);});
second_sector.addEventListener("click", function() {pickFunction(1);});
function randomChoice() {
    rnd_value = (level + 1) * Math.random();
    console.log(rnd_value);
    int_rnd_value = Math.floor(rnd_value);
    console.log(int_rnd_value);
}
function showGreenSector() {
    if (int_rnd_value == 0) {
        first_sector.style.backgroundColor = "green";
        setTimeout(function(){
            first_sector.removeAttribute("style");
        }, 400);
    }
    else if (int_rnd_value == 1) {
        second_sector.style.backgroundColor = "green";
        setTimeout(function(){
            second_sector.removeAttribute("style");
        }, 400); 
    }
    else {
        third_sector.style.backgroundColor = "green";
        setTimeout(function(){
            third_sector.removeAttribute("style");
        }, 400);       
    }
}
function pickFunction(sector_number) {
    if (sector_number == int_rnd_value) {
        console.log("correct");
        stat = (stat * i + 100) / (i + 1);
        console.log("stat = " + stat);
        statistics.innerText = Math.round(stat).toString() + "%";
        i++;
        showGreenSector();
        if (level == 1) {
            setTimeout(function(){
                addElements();
                level = 2;
                randomChoice();
            }, 390);
        }
        console.log("level = " + level);    
    }
    else {
        console.log("wrong");
        stat = (stat * i + 0) / (i + 1);
        console.log("stat = " + stat);
        statistics.innerText = Math.round(stat).toString() + "%";
        i++;
        showGreenSector();
        if (level == 2) {
            setTimeout(function() {
                removeElements();
                level = 1;
                randomChoice();
            }, 390);
        }
    }
    setTimeout(function(){
        randomChoice();
    }, 395);
}
function addElements() {
    li_3 = document.createElement("li");
    first_sector.setAttribute("id", "sec_1");
    second_sector.setAttribute("id", "sec_2");
    li_3.setAttribute("id", "sec_3");
    li_3.setAttribute("class", "third_sector");
    ul.appendChild(first_sector);
    ul.appendChild(second_sector);
    ul.appendChild(li_3);
    third_sector = document.querySelector('.third_sector');
    third_sector.addEventListener("click", function() {pickFunction(2);});
  }
function removeElements() {
    li_3.remove();
    first_sector.removeAttribute("id");
    second_sector.removeAttribute("id");
  }
