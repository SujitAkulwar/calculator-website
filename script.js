function calculate() {
    var p;
    var q;
    p = document.getElementById("result").value;
    q = eval(p);
    document.getElementById("result").value = q;
}

function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
   


