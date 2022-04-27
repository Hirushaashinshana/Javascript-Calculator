let output = document.getElementById("outputScreen");

function Display(num) {
    output.value+=num;
}
function Clear() {
    output.value = "";
}
function Calculate() {
    try {
        output.value = eval(output.value)
    } catch (err) {
        alert("Invalid")
    }
}

function Delete() {
    output.value = output.value.slice(0,-1);
}