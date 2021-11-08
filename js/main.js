var suivant =  document.getElementsById("btn-suivant");
var interne = document.getElementById("interne");
var externe = document.getElementById("externe");
var feminin = document.getElementsById("feminin");
var aide = document.getElementsById("aide");
console.log(feminin);

function testAide(){
    if(aide.checked ===true){}
}
function suivantCondition(){
    if(interne.checked==false && externe.checked==false ){
        document.getElementsById("btn-suivant").disabled==true;
    }
}
function check(){
    var ele = document.getElementsByName('interne/externe');
    var flag = 0;
    for(var i = 0; i < ele.length; i ++){
    if (ele[i].checked)
    flag = 1; 
    } 
    if (flag == 1)
    document.getElementById('btn-suivant').disabled = false;
    }