// sessionStorage("animal", "name");
// sessionStorage("currentSpace", "1");
sessionStorage.setItem("currentPosition", "1");
sessionStorage.setItem("totalRolls", "0");
sessionStorage.setItem("totalPoints", "100");
// function mark(el) {
//     console.log(el);
//     el.style.border = "solid 8px #F25270";
//     sessionStorage.setItem("animal", el.id);
// }
function roll() {
    var num = Math.floor((Math.random() * 3) + 1);
    var opportunity = Math.floor((Math.random() * 2) + 1);
    if (opportunity == 2) {
        mpopup.style.display = "block";
        buy1Space();
    }
    var value = document.getElementById("rollValue");
    value.innerHTML = num;
    var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
    document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
    var totalRolls = parseInt(sessionStorage.getItem("totalRolls"));
    totalRolls++;
    currentPosition += num;
    if (currentPosition>=17) {
        win();
    }
    sessionStorage.setItem("totalRolls", totalRolls);
    sessionStorage.setItem("currentPosition", currentPosition);
    document.getElementById("totalRolls").innerHTML = sessionStorage.getItem("totalRolls");
    document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
}
function win(){
win.style.display = "block";
}
// get the mPopup
var mpopup = document.getElementById('mpopupBox');
var win = document.getElementById('win');

// get the link that opens the mPopup
var mpLink = document.getElementById("mpopupLink");

// get the close action element
var close = document.getElementsByClassName("close")[0];

// open the mPopup once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
}

// close the mPopup once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
}

function buy1Space() {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    document.getElementById("opportunityText").innerHTML = "Would you like to move up two spaces? It will cost you 20 points.";
    yes.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition+2);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints-20);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById("balance").innerHTML=sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";

    }
    no.onclick = function(){
        mpopup.style.display = "none";
    }

}
