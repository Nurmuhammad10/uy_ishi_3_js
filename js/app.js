const btnRed = document.querySelector("#btn-red");
const btnYeloow = document.querySelector("#btn-yellow");
const btnGreen = document.querySelector("#btn-green");
const btnCall = document.querySelector("#btn-call");

btnRed.addEventListener("click", () => {
    document.getElementById("color-red").style.backgroundColor = "red";
    document.getElementById("color-yellow").style.backgroundColor = "black";
    document.getElementById("color-green").style.backgroundColor = "black";
})

btnYeloow.addEventListener("click", () => {
    document.getElementById("color-red").style.backgroundColor = "black";
    document.getElementById("color-yellow").style.backgroundColor = "yellow";
    document.getElementById("color-green").style.backgroundColor = "black";
})
btnGreen.addEventListener("click", () => {
    document.getElementById("color-red").style.backgroundColor = "black";
    document.getElementById("color-yellow").style.backgroundColor = "black";
    document.getElementById("color-green").style.backgroundColor = "green";
})
btnCall.addEventListener("click", () => {
    document.getElementById("color-red").style.backgroundColor = "black";
    document.getElementById("color-yellow").style.backgroundColor = "black";
    document.getElementById("color-green").style.backgroundColor = "black";
})