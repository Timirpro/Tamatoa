let rnd_value;
let int_rnd_value;
let maxLevel = 9;
let count = 0;
let stat = 0;
let level = 1;
let sum = 0;
let maxAttempts = 3;
let attempts;
let levelCount = new Array(maxLevel).fill(0);
let levelWin = new Array(maxLevel).fill(0);
let levelStat = new Array(maxLevel).fill(0);
let levelAvgStat = new Array(maxLevel).fill(0);
let sectors = document.querySelectorAll('.sectors');
let statistics = document.querySelector('.text');
let tier = document.querySelector('.tier');
for (let i = 0; i < maxLevel + 1; i++) {
    sectors[i].addEventListener("click", pickFunction);
}
function randomChoice() {
    rnd_value = (level + 1) * Math.random();
    int_rnd_value = Math.floor(rnd_value);
    // console.log('key = ' + (int_rnd_value + 1));
}
function showGreenSector() {
    for (let i = 0; i < maxLevel + 1; i++) {
        sectors[i].removeEventListener("click", pickFunction);
    }
    sectors[int_rnd_value].setAttribute("id", "green");
    setTimeout(function(){
        sectors[int_rnd_value].removeAttribute("id", "green");
        for (let i = 0; i < maxLevel + 1; i++) {
            sectors[i].addEventListener("click", pickFunction);
        }
    }, 380);
}    
function pickFunction() {
    levelCount[level - 1]++;
    if (Array.from(this.parentNode.children).indexOf(this) == int_rnd_value) {
        console.log("correct");
        attempts = maxAttempts;
        levelWin[level - 1]++;
        stat = (stat * count + 100) / (count + 1);
        statistics.innerText = Math.round(stat).toString() + "%";
        count++;
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
        stat = (stat * count + 0) / (count + 1);
        statistics.innerText = Math.round(stat).toString() + "%";
        count++;
        attempts--;
        showGreenSector();
        if (level > 1 & attempts < 1) {
            setTimeout(function() {
                removeElements();
                level = 1;
                tier.innerText = "Level " + level;
            }, 390);
        }
    }
    levelAvgStat[level - 1] = 1 / (level + 1);
    levelStat[level - 1] = levelWin[level - 1] / levelCount[level - 1];
    for (let i = 0; i < maxLevel; i++) {
        levelAvgStat[i] = 1 / (i + 2);
        sum += levelAvgStat[i] * levelCount[i];
    }
    console.log(count);
    console.log((sum / count).toFixed(2));
    sum = 0;
    // console.log(levelCount.join("      "));
    // console.log(levelWin.join("      "));
    console.log(levelAvgStat.map(a => a.toFixed(2)).join("   "));
    console.log(levelStat.map(a => a.toFixed(2)).join("   "));
    setTimeout(function(){
        randomChoice();
    }, 395);
}
function addElements() {
    let step = 360 / (level + 2);
    for (let i = 0; i < level + 2; i++) {
        sectors[i].style.display = "block";
        sectors[i].style.transform = "rotate(" + (90 - step / 2 + i * step) + "deg) skew(" + (90 - step) + "deg) scale(2)";
    }
}
function removeElements() {
    for (let i = 0; i < maxLevel + 1; i++) {
        sectors[i].removeAttribute("style");
    }
}
