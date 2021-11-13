let suivant = document.getElementById("suivant");
let interne = document.getElementById("interne");
let externe = document.getElementById("externe");


function suivantCondition() {
    if (!(interne.checked) && !(externe.checked)) {
        suivant.setAttribute("disabled", "disabled");
    } else {
        suivant.setAttribute("abled", "abled");
    }
}
suivant.addEventListener("click", suivantCondition());

function changeImgGender() {
    let masculin = document.getElementById("masculin");
    let feminin = document.getElementById("feminin");
    if (feminin.checked) {

        // let titre = document.querySelectorAll('h2, .titre').style.color("#71BF45");
        var thechoice = document.getElementById('feminin').value
        document.getElementById("ident").src = "img/" + thechoice + ".png" ;


    } else {
        var thechoice = document.getElementById('masculin').value
        // var titre = document.querySelectorAll('h2, .titre');
        document.getElementById("ident").src = "img/" + thechoice + ".png" ;
    }
}
feminin.addEventListener("click", changeImgGender());
masculin.addEventListener("click", changeImgGender());

// #119EDA pour les hommes 
// #71BF45 pour les femmes.