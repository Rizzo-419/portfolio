

//==================================
//   Dark Mode Brainstorm - NO GUIDE
//==================================
// -click button to switch styling to a dark mode
// -don't use a guide
// -use a button with an onclick() function
// -use DOM selectors to grab style properties and set them
// -use a loop to go through each and add a class
// -maybe create a way to switch back, or a toggle, or just refresh page


var allTextElems = document.querySelectorAll("h1,li,.darkBG,button");
var allBGElems = document.querySelectorAll("body,button,li,.darkBG");
var allCardElems = document.querySelectorAll(".card")

    //IE 11 fix to turn Node into Array (googled this answer)
var allTextElemsArray= Array.prototype.slice.call(allTextElems);
var allBGElemsArray= Array.prototype.slice.call(allBGElems);
var allCardElemsArray= Array.prototype.slice.call(allCardElems);

function changeTextWhite(allTextElemsArray) {
    allTextElemsArray.style.color = "white";
}

function changeBGDark(allBGElemsArray) {
    allBGElemsArray.style.backgroundColor = "black";
}

function changeBoxShadow(allCardElemsArray){
    allCardElemsArray.style.boxShadow = "10px 10px 5px rgba(255,255,255,0.3)";
}

    //runs onclick
function darkMode() {
    allTextElemsArray.forEach(changeTextWhite);
    allBGElemsArray.forEach(changeBGDark);
    allCardElemsArray.forEach(changeBoxShadow);
};


// Dark Mode End
// --------------------------------

function refreshPage(){
    window.location.reload();
}
