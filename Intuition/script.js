let left_value;
let right_value;
let i = 0;
let stat = 0;
function randomChoice() {
    left_value = Math.random() < 0.5;
    right_value = !left_value;
}
function pickFunctionLeft() {
    let leftElement = document.getElementById('left');
    let rightElement = document.getElementById('right');
    let output = document.querySelector('h2');
    let statistics = document.querySelector('h3');
    if (left_value == true) {
        leftElement.style.backgroundColor = "green";
        rightElement.style.backgroundColor = "red";
        output.style.color = "green";
        output.innerText = "correct";
        stat = (stat * i + 100) / (i + 1);
        // alert("True");
	}
    else {
        leftElement.style.backgroundColor = "red";
        rightElement.style.backgroundColor = "green";
        output.style.color = "red";
        output.innerText = "wrong";
        stat = (stat * i + 0) / (i + 1);
        // alert("False");
    }
    randomChoice();
    statistics.innerText = Math.round(stat).toString() + "%";
    i++;
    setTimeout(function(){
        leftElement.style.backgroundColor = "#ccb";
        rightElement.style.backgroundColor = "#ccb";
    }, 400); 
}
function pickFunctionRight() {
    let leftElement = document.getElementById('left');
    let rightElement = document.getElementById('right');
    let output = document.querySelector('h2');
    let statistics = document.querySelector('h3');
    if (left_value == true) {
        leftElement.style.backgroundColor = "green";
        rightElement.style.backgroundColor = "red";
        output.style.color = "red";
        output.innerText = "wrong";
        stat = (stat * i + 0) / (i + 1);
        // alert("False");
	}
    else {
        leftElement.style.backgroundColor = "red";
        rightElement.style.backgroundColor = "green";
        output.style.color = "green";
        output.innerText = "correct";
        stat = (stat * i + 100) / (i + 1);
        // alert("True");
    }
    randomChoice();
    statistics.innerText = Math.round(stat).toString() + "%";
    i++;
    setTimeout(function(){
        leftElement.style.backgroundColor = "#ccb";
        rightElement.style.backgroundColor = "#ccb";
    }, 400); 
}