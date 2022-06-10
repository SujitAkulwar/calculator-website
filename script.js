function calculate() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value =  eval(p);
}

function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
   


