//lancé de dé 20
function ini() {
    doc.de1.value=parseInt(Math.random()*20+1);
}
function restart() {
    doc.de1.value=0;
}
//fenêtre copyright
function copyright() {
    el = document.getElementById("copyright");
    el.style.visibility = el.style.visibility == "visible" ? "hidden" : "visible";
}