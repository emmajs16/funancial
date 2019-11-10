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
        switch (Math.floor((Math.random() * 6) + 1)) {
            case 1:
                parkingTicket();
                break;
            case 2:
                coffee();
                break;
            case 3:
                babysit();
                break;
            case 3:
                gym()
                break;
            case 4:
                hospital()
                break;
            case 5:
                studentLoans()
                break;
            case 6:
                creditCard()
                break;
        }
    }
    var value = document.getElementById("rollValue");
    value.innerHTML = num;
    var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
    document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
    document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
    var totalRolls = parseInt(sessionStorage.getItem("totalRolls"));
    totalRolls++;
    currentPosition += num;
    if (currentPosition >= 17) {
        sessionStorage.setItem("currentPosition", 17);
        console.log("AHHHHHHH YOU WON")
        winning()
    }
    sessionStorage.setItem("totalRolls", totalRolls);
    sessionStorage.setItem("currentPosition", currentPosition);
    document.getElementById("totalRolls").innerHTML = sessionStorage.getItem("totalRolls");
    document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
    document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
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

function parkingTicket() {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    document.getElementById("opportunityText").innerHTML = "You are late to work and all the spots are filled! Do you risk a parking ticket?";
    yes.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition - 4);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints - 30);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
    no.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition - 1);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints - 10);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
}

function coffee() {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    document.getElementById("opportunityText").innerHTML = "You stayed up all night working on homework. Do you buy a coffee?";
    yes.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints - 5);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
    no.onclick = function() {
        mpopup.style.display = "none";
    }
}

function babysit() {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    document.getElementById("opportunityText").innerHTML = "Your aunt offered you the chance to babysit for your little cousin. Do you accept?";
    yes.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition + 1);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints + 20);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
    no.onclick = function() {
        mpopup.style.display = "none";
    }
}

function gym() {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    document.getElementById("opportunityText").innerHTML = "You haven't used your gym membership in a while. Do you want to keep it, just in case?";
    yes.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition - 1);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints - 40);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
    no.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition + 1);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
}

function hospital() {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    document.getElementById("opportunityText").innerHTML = "You went to the hospital for an x-ray a few months ago. Do you want to continue to wait to make your payment?";
    yes.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition - 3);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
    no.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition + 1);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints - 20);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
}

function studentLoans() {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    document.getElementById("opportunityText").innerHTML = "You got accepted into a great, but costly college. Do you attend and take out student loans?";
    yes.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition - 5);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints - 5);
        sessionStorage.setItem("totalPoints", currentPoints);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
    no.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
}

function creditCard() {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    document.getElementById("opportunityText").innerHTML = "Would you like to open up a new credit card to pay for a spring break trip?";
    yes.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition - 3);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints - 2);
        sessionStorage.setItem("totalPoints", currentPoints);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
    no.onclick = function() {
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = "";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", currentPosition);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", currentPoints);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById(sessionStorage.getItem("currentPosition")).innerHTML = '<img id = "icon" src="$.png" alt="">';
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        mpopup.style.display = "none";
    }
}

function winning() {
    var creditScore = document.getElementById('score');
    if (parseInt(sessionStorage.getItem("totalPoints")) >= 90 && parseInt(sessionStorage.getItem("totalRolls")) <= 5) {
        creditScore.innerHTML = Math.floor(Math.random() * (720 - 850)) + 850;
    } else if (parseInt(sessionStorage.getItem("totalPoints")) >= 70 && parseInt(sessionStorage.getItem("totalRolls")) <= 8) {
        creditScore.innerHTML = Math.floor(Math.random() * (690 - 719)) + 719;
    } else if (parseInt(sessionStorage.getItem("totalPoints")) >= 40 && parseInt(sessionStorage.getItem("totalRolls")) <= 10) {
        creditScore.innerHTML = Math.floor(Math.random() * (689 - 630)) + 630;
    } else {
        creditScore.innerHTML = Math.floor(Math.random() * (629 - 300)) + 300;
    }
    win.style.display = "block";

    // yes or no
    var again = document.getElementById('again');
    var not = document.getElementById('not');

    again.onclick = function() {
        console.log("I WANT TO PLAY AGAIN")
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF988A";
        var currentPosition = parseInt(sessionStorage.getItem("currentPosition"));
        sessionStorage.setItem("currentPosition", 1);
        var currentPoints = parseInt(sessionStorage.getItem("totalPoints"));
        sessionStorage.setItem("totalPoints", 100);
        document.getElementById(sessionStorage.getItem("currentPosition")).style.background = "#BF7E82";
        document.getElementById("balance").innerHTML = sessionStorage.getItem("totalPoints");
        sessionStorage.setItem("totalRolls", 0);
        document.getElementById("totalRolls").innerHTML = sessionStorage.getItem("totalRolls");
        win.style.display = "none";
    }
}
