let progressbar = document.getElementById("progress");
let suivant = document.getElementById("suivant");
let interne = document.getElementById("interne");
let externe = document.getElementById("externe");
let second = document.getElementById("second");
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
    let thechoice = feminin.value;
    document.getElementById("ident").src = "img/" + thechoice + ".png";
  } else {
    let thechoice = masculin.value;
    document.getElementById("ident").src = "img/" + thechoice + ".png";
  }
}

finishButton.addEventListener("click", function () {
  alert('Nous avons le plaisir de vous annoncer que votre demande a bien été prise en compte');
});
// #119EDA pour les hommes
// #71BF45 pour les femmes.
