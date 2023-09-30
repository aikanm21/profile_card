var darkModeIcon = document.getElementById("dark_mode_icon");
var lightModeIcon = document.getElementById("light_mode");
var introPara = document.getElementById("intro");
var userName = document.getElementById("name");
var email = document.getElementById("mail");
var spanString = document.getElementById("span");
var iconInDark = document.querySelectorAll('.icon_dark_mode');
var iconsSpan = document.querySelectorAll('.icons-span');
var modeTextShow = document.getElementById('mode_text');

function darkMode() {

    darkModeIcon.style.visibility = "hidden";
    lightModeIcon.style.visibility = "visible";

    darkModeIcon.style.transition = "none"
    modeTextShow.innerText = "";

    document.getElementById("card").style.backgroundColor = "#25245c";
    introPara.style.color = "white";
    userName.style.color = "white";
    email.style.backgroundColor = "#6B62B9";
    spanString.style.color = "#948ECC";

    iconInDark.forEach(Icon => {
        Icon.style.color = '#A79BDF';

    });
    iconsSpan.forEach(iSpan => {
        iSpan.style.color = '#A79BDF';

    });

}

function lightMode() {

    darkModeIcon.style.visibility = "visible";
    lightModeIcon.style.visibility = "hidden";

    lightModeIcon.style.transition = "none"

    document.getElementById("card").style.backgroundColor = "white";
    introPara.style.color = "black";
    userName.style.color = "black";
    email.style.backgroundColor = "#25245c";
    spanString.style.color = "black";


    iconInDark.forEach(Icon => {
        Icon.style.color = '#27245e';

    });
    iconsSpan.forEach(iSpan => {
        iSpan.style.color = '#27245e';

    });
}

// For Dark Mode Icon (onmouseover)
function modeText() {

    modeTextShow.innerText = "APPLY DARK MODE";
    modeTextShow.style.color = "black"
    darkModeIcon.style.transition = "0.5s"
    darkModeIcon.style.color = "white"
    darkModeIcon.style.backgroundColor = "#25245c"
}
// For Dark Mode Icon (onmouseout)
function removeText() {
    modeTextShow.innerText = "";
    darkModeIcon.style.color = "#25245c"
    darkModeIcon.style.backgroundColor = "white"
}

// For Light Mode Icon (onmouseover)
function lightModeText() {

    modeTextShow.innerText = "APPLY LIGHT MODE";
    modeTextShow.style.color = "white"
    lightModeIcon.style.transition = "0.5s"
    lightModeIcon.style.color = "#25245c"
    lightModeIcon.style.backgroundColor = "#f9d101"
}

// For Light Mode Icon (onmouseout)
function lightRemoveText() {

    modeTextShow.innerText = "";
    lightModeIcon.style.color = "#f9d101"
    lightModeIcon.style.backgroundColor = "#25245c"
}
