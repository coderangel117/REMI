let suivant = document.getElementById("suivant");
let interne = document.getElementById("interne");
let externe = document.getElementById("externe");
let transport = document.getElementById("transport");
let aide1 = document.getElementById("aide1");
let aide2 = document.getElementById("aide2");
let aide3 = document.getElementById("aide3");
let aide4 = document.getElementById("aide4");

function suivantCondition() {
    if (!(transport.checked) && !(aide1.checked) && !(aide2.checked) && !(aide3.checked) && !(aide4.checked)
    ) {
        suivant.setAttribute("disabled", "disabled");
    }
    if ((transport.checked) || (aide1.checked) || (aide2.checked) || (aide3.checked) || (aide4.checked)) {
        suivant.setAttribute("enabled", "enabled");
    }
}
suivant.addEventListener("click", suivantCondition());

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