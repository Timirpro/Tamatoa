let rnd_value;
let int_rnd_value;
let maxLevel = 9;
let i = 0;
let stat = 0;
let level = 1;
let ul = document.getElementById("wheel__sectors");
let sectors = document.querySelectorAll('.sectors');
let statistics = document.querySelector('.text');
let tier = document.querySelector('.tier');
for (let j = 0; j < maxLevel + 1; j++) {
    sectors[j].addEventListener("click", pickFunction);
}
function randomChoice() {
    rnd_value = (level + 1) * Math.random();
    int_rnd_value = Math.floor(rnd_value);
    console.log(int_rnd_value);
}
function showGreenSector() {
    for (let j = 0; j < maxLevel + 1; j++) {
        sectors[j].removeEventListener("click", pickFunction);
    }
    sectors[int_rnd_value].setAttribute("id", "green");
    setTimeout(function(){
        sectors[int_rnd_value].removeAttribute("id", "green");
        for (let j = 0; j < maxLevel + 1; j++) {
            sectors[j].addEventListener("click", pickFunction);
        }
    }, 380);
}    
function pickFunction() {
    if (Array.from(this.parentNode.children).indexOf(this) == int_rnd_value) {
        console.log("correct");
        stat = (stat * i + 100) / (i + 1);
        statistics.innerText = Math.round(stat).toString() + "%";
        i++;
        showGreenSector();
        if (level < maxLevel) {
            setTimeout(function(){
                addElements();
                level++;
                tier.innerText = "Level " + level;
            }, 390);
        }
    }
    else {
        console.log("wrong");
        stat = (stat * i + 0) / (i + 1);
        statistics.innerText = Math.round(stat).toString() + "%";
        i++;
        showGreenSector();
        if (level > 1) {
            setTimeout(function() {
                removeElements();
                level = 1;
                tier.innerText = "Level " + level;
            }, 390);
        }
    }
    setTimeout(function(){
        randomChoice();
    }, 395);
}
function addElements() {
    let step = 360 / (level + 2);
    for (let j = 0; j < level + 2; j++) {
        sectors[j].style.display = "block";
        sectors[j].style.transform = "rotate(" + (90 - step / 2 + j * step) + "deg) skew(" + (90 - step) + "deg) scale(2)";
    }
}
function removeElements() {
    for (let j = 0; j < maxLevel + 1; j++) {
        sectors[j].removeAttribute("style");
    }
}
