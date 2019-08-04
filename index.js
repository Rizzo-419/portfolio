

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

function changeTextWhite(allTextElems) {
    allTextElems.style.color = "white";
}

function changeBGDark(allBGElems) {
    allBGElems.style.backgroundColor = "black";
}

function changeBoxShadow(allCardElems){
    allCardElems.style.boxShadow = "10px 10px 5px rgba(255,255,255,0.3)";
}

    //runs onclick
function darkMode() {
    allTextElems.forEach(changeTextWhite);
    allBGElems.forEach(changeBGDark);
    allCardElems.forEach(changeBoxShadow);
};

// Dark Mode End
// --------------------------------

function refreshPage(){
    window.location.reload();
}