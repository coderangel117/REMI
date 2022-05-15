let suivant = document.getElementById("suivant");
let interne = document.getElementById("interne");
let externe = document.getElementById("externe");
let transport = document.getElementById("transport");
let aide1 = document.getElementById("aide1");
let aide2 = document.getElementById("aide2");
let aide3 = document.getElementById("aide3");
let aide4 = document.getElementById("aide4");
let first = document.getElementById("first");
let finishButton = document.getElementById("finish");
suivant.addEventListener("click", function () {
    first.style.visibility = "hidden";
    second.style.visibility = "visible";
    first.setAttribute('class', "disparu");
    progressbar.setAttribute("value", "66");
    });
feminin.addEventListener("click", changeImgGender());
masculin.addEventListener("click", changeImgGender());

function changeImgGender() {
    let masculin = document.getElementById("masculin");
    let feminin = document.getElementById("feminin");
    if (feminin.checked) {

        // let titre = document.querySelectorAll('h2, .titre').style.color("#71BF45");
        var thechoice = document.getElementById('feminin').value
        document.getElementById("ident").src = "img/" + thechoice + ".png";

    } else {
        var thechoice = document.getElementById('masculin').value
        // var titre = document.querySelectorAll('h2, .titre');
        document.getElementById("ident").src = "img/" + thechoice + ".png";
    }
}
feminin.addEventListener("click", changeImgGender());
masculin.addEventListener("click", changeImgGender());

// #119EDA pour les hommes 
// #71BF45 pour les femmes.

function alertClicked() { // to test if the button clicked
    if (suivant.clicked == true) {
        alert("your button was clicked !! ")
    }
}
function clickCondition() { // if the button clicked, #second visible
    if (!suivant.clicked) {
        let second = document.getElementById("second");
        second.style.opacity = 0;
    } else {
        second.style.opacity = 1;
        first.style.opacity = 0;

    }
}

suivant.addEventListener("click", alertClicked());

function finishClicked() {
    if (finishButton.clicked) {
        alert("Fini !! ")
    }
}
finishButton.addEventListener("click", finishClicked());