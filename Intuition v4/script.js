let rnd_value;
let int_rnd_value;
let maxLevel = 8;
let i = 0;
let stat = 0;
let level = 1;
let ul = document.getElementById("wheel__sectors");
console.log(ul);
let sectors = document.querySelectorAll('.sectors');
console.log(sectors);
let statistics = document.querySelector('.text');
for (let j = 0; j < maxLevel; j++) {
    sectors[j].addEventListener("click", function() {pickFunction(j);});
}
function randomChoice() {
    rnd_value = (level + 1) * Math.random();
    console.log(rnd_value);
    int_rnd_value = Math.floor(rnd_value);
    console.log(int_rnd_value);
}
function showGreenSector() {
    sectors[int_rnd_value].setAttribute("id", "green");
    setTimeout(function(){
        sectors[int_rnd_value].removeAttribute("id", "green");
    }, 380);
}    
function pickFunction(sector_number) {
    if (sector_number == int_rnd_value) {
        console.log("correct");
        stat = (stat * i + 100) / (i + 1);
        console.log("stat = " + stat);
        statistics.innerText = Math.round(stat).toString() + "%";
        i++;
        showGreenSector();
        if (level < maxLevel - 1) {
            setTimeout(function(){
                addElements();
                level++;
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
        if (level > 1) {
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
    let step = 360 / (level + 2);
    // if (level == 1) {
    //     sectors[0].style.transform = "rotate(-30deg) skew(-30deg) scale(2)";
    //     sectors[1].style.transform = "rotate(90deg) skew(-30deg) scale(2)";
    //     sectors[2].style.display = "block";
    //     sectors[2].style.transform = "rotate(210deg) skew(-30deg) scale(2)";
    // }
    
        for (let j = 0; j < level + 2; j++) {
            sectors[j].style.display = "block";
            sectors[j].style.transform = "rotate(" + (90 - step / 2 + j * step) + "deg) skew(" + (90 - step) + "deg) scale(2)";
        }
    
    // else if (level == 2) {
    //     sectors[0].style.transform = "rotate(45deg) skew(0deg) scale(2)";
    //     sectors[1].style.transform = "rotate(135deg) skew(0deg) scale(2)";
    //     sectors[2].style.display = "block";
    //     sectors[2].style.transform = "rotate(225deg) skew(0deg) scale(2)";
    //     sectors[3].style.display = "block";
    //     sectors[3].style.transform = "rotate(315deg) skew(0deg) scale(2)";
    // }
    // else if (level == 3) {
    //     sectors[0].style.transform = "rotate(54deg) skew(18deg) scale(2)";
    //     sectors[1].style.transform = "rotate(126deg) skew(18deg) scale(2)";
    //     sectors[2].style.display = "block";
    //     sectors[2].style.transform = "rotate(198deg) skew(18deg) scale(2)";
    //     sectors[3].style.display = "block";
    //     sectors[3].style.transform = "rotate(270deg) skew(18deg) scale(2)";
    //     sectors[4].style.display = "block";
    //     sectors[4].style.transform = "rotate(342deg) skew(18deg) scale(2)";
    // }
    // else if (level == 4) {
    //     sectors[0].style.transform = "rotate(60deg) skew(30deg) scale(2)";
    //     sectors[1].style.transform = "rotate(120deg) skew(30deg) scale(2)";
    //     sectors[2].style.display = "block";
    //     sectors[2].style.transform = "rotate(180deg) skew(30deg) scale(2)";
    //     sectors[3].style.display = "block";
    //     sectors[3].style.transform = "rotate(240deg) skew(30deg) scale(2)";
    //     sectors[4].style.display = "block";
    //     sectors[4].style.transform = "rotate(300deg) skew(30deg) scale(2)";
    //     sectors[5].style.display = "block";
    //     sectors[5].style.transform = "rotate(360deg) skew(30deg) scale(2)";
    // }
    // else if (level == 5) {
    //     sectors[0].style.transform = "rotate(64.286deg) skew(38.571deg) scale(2)";
    //     sectors[1].style.transform = "rotate(115.714deg) skew(38.571deg) scale(2)";
    //     sectors[2].style.display = "block";
    //     sectors[2].style.transform = "rotate(167.143deg) skew(38.571deg) scale(2)";
    //     sectors[3].style.display = "block";
    //     sectors[3].style.transform = "rotate(218.571deg) skew(38.571deg) scale(2)";
    //     sectors[4].style.display = "block";
    //     sectors[4].style.transform = "rotate(270deg) skew(38.571deg) scale(2)";
    //     sectors[5].style.display = "block";
    //     sectors[5].style.transform = "rotate(321.429deg) skew(38.571deg) scale(2)";
    //     sectors[6].style.display = "block";
    //     sectors[6].style.transform = "rotate(372.857deg) skew(38.571deg) scale(2)";
    // }
    // else if (level == 6) {
    //     sectors[0].style.transform = "rotate(67.5deg) skew(45deg) scale(2)";
    //     sectors[1].style.transform = "rotate(112.5deg) skew(45deg) scale(2)";
    //     sectors[2].style.display = "block";
    //     sectors[2].style.transform = "rotate(157.5deg) skew(45deg) scale(2)";
    //     sectors[3].style.display = "block";
    //     sectors[3].style.transform = "rotate(202.5deg) skew(45deg) scale(2)";
    //     sectors[4].style.display = "block";
    //     sectors[4].style.transform = "rotate(247.5deg) skew(45deg) scale(2)";
    //     sectors[5].style.display = "block";
    //     sectors[5].style.transform = "rotate(292.5deg) skew(45deg) scale(2)";
    //     sectors[6].style.display = "block";
    //     sectors[6].style.transform = "rotate(337.5deg) skew(45deg) scale(2)";
    //     sectors[7].style.display = "block";
    //     sectors[7].style.transform = "rotate(382.5deg) skew(45deg) scale(2)";
    // }
}
function removeElements() {
    for (let j = 0; j < maxLevel; j++) {
        sectors[j].removeAttribute("style");
    }
}
